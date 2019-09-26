import { Component, OnInit, ViewEncapsulation, ElementRef, Input, AfterViewInit, ViewChild } from '@angular/core';
import { UrlService } from 'src/app/common/services/url.service';
import { CardShowAnimation, ShowHideAnimation } from 'src/app/common/animations';
import { UnsplashService } from 'src/app/common/services/unsplash.service';
import { debounceTime } from 'rxjs/operators';
import { Observable, fromEvent } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    CardShowAnimation('listAnimation'),
    ShowHideAnimation('cardAnimation')
  ]

})
export class HomeComponent implements OnInit, AfterViewInit {
  // @ViewChild('wrapper', { static: false }) element: ElementRef;
  constructor(
    private http: UrlService,
    private unsplah: UnsplashService,
  ) { }

  private isLoaded = false;
  private lastElem;
  private scrollEvent: Observable<any>;

  private cardList: any = [];
  private totalAmount = 0;
  private currentPage = 1;
  private showMoreColletions = true;

  ngOnInit() {
    this.getGroups()
      .subscribe(
        (data: Response) => {
          this.totalAmount = +data.headers.get('X-Total');
          this.cardList = data.body;
          this.isLoaded = true;
        }
      )
  }

  ngAfterViewInit() {
    // this.detectLastItem();
  }

  setShowMore() {
    this.showMoreColletions = this.totalAmount - (this.currentPage * 12) > 0;
  }

  getGroups(pageNum = 1) {
    return this.unsplah.getGroups(pageNum)
  }

  private isBlur: boolean = false;
  setBlur(event) {
    this.isBlur = event;
    // event ?
    //   this.cardList.forEach(element => {
    //     return element === card ? element.blur = false : element.blur = true
    //   })
    //   : this.cardList.forEach(element => element.blur = false)
  }

  // detectLastItem() {
  //   this.scrollEvent = fromEvent(window, 'scroll');
  //   this.scrollEvent
  //     .pipe(
  //       debounceTime(100),
  //     )
  //     .subscribe(
  //       event => {
  //         console.log(event);
  //       }
  //     )
  // }

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
    this.getGroups(++this.currentPage)
      .subscribe((data: Response) => {
        let arr = data.body;
        this.cardList = this.cardList.concat(arr);
        this.isLoaded = true;
      })
  }

  private observeElem: any;
  setObsrve(element) {
    if (this.observeElem == element) {
      return;
    } else {
      if (this.showMoreColletions) {
        this.observeElem = element;
        this.observer.observe(element);
        this.setShowMore()
      }
    }
  }
}
