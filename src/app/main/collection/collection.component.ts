import { Component, OnInit, ViewEncapsulation, Input, HostBinding } from '@angular/core';
import { UnsplashService } from 'src/app/common/services/unsplash.service';
import { CardShowAnimation } from 'src/app/common/animations';
import { ActivatedRoute } from '@angular/router';
import { PhotoModal } from 'src/app/common/services/photo-modal.service';


@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss'], encapsulation: ViewEncapsulation.None,
  animations: [
    CardShowAnimation('listAnimation')
  ]
})

export class CollectionComponent implements OnInit {

  constructor(
    private unsplash: UnsplashService,
    private activeRoute: ActivatedRoute,
    private modal: PhotoModal
  ) { }
  private isLoaded = false;
  private collection: any = [];
  private totalAmount = 0;
  private currentPage = 1;
  private showMorePhotos = true;
  private isLast: boolean;
  private id: number;

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      this.id = params.id;
      this.unsplash.getCollection(this.id, this.currentPage)
        .subscribe(
          (data: Response) => {
            this.totalAmount = +data.headers.get('X-Total');
            this.collection = data.body;
            this.isLoaded = true;
          }
        )
    })
  }

  private isBlur: boolean = false;
  setBlur(event) {
    this.isBlur = event;
    // event ?
    //   this.collection.forEach(element => {
    //     return element === photo ? element.blur = false : element.blur = true
    //   })
    //   : this.collection.forEach(element => element.blur = false)
  }

  showModal(photo) {
    this.modal.show(photo)
  }

  setShowMore() {
    this.showMorePhotos = this.totalAmount - (this.currentPage * 12) > 0;
  }

  private observer = new IntersectionObserver(
    (entries, observer) => {
      if (entries[0].intersectionRatio >= 1) {
        this.updateCardList();
        observer.unobserve(this.observeElem);
      }
    }, {
    root: null, rootMargin: '0px', threshold: 1.0
  }
  )

  updateCardList() {
    this.isLoaded = false;
    this.unsplash.getCollection(this.id, ++this.currentPage)
      .subscribe((data: Response) => {
        let arr = data.body;
        this.collection = this.collection.concat(arr);
        this.isLoaded = true;
      })
  }

  private observeElem: any;
  setObsrve(element) {
    if (this.observeElem == element) {
      return;
    } else {
      if (this.showMorePhotos) {
        this.observeElem = element;
        this.observer.observe(element);
        this.setShowMore()
      }
    }
  }
}
