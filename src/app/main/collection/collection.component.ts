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

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      this.unsplash.getCollection(params.id)
        .subscribe(
          (data: Response) => {
            this.totalAmount = +data.headers.get('X-Total');
            this.collection = data.body;
            this.isLoaded = true;
          }
        )
    })
  }

  setBlur(event, photo) {
    event ?
      this.collection.forEach(element => {
        return element === photo ? element.blur = false : element.blur = true
      })
      : this.collection.forEach(element => element.blur = false)
  }

  showModal(photo) {
    this.modal.show(photo)
  }

}
