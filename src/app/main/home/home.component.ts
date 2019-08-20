import { Component, OnInit, ErrorHandler, ViewEncapsulation } from '@angular/core';
import { UrlService } from 'src/app/common/services/url.service';
import { CardShowAnimation, ShowHideAnimation } from 'src/app/common/animations';
import { UnsplashService } from 'src/app/common/services/unsplash.service';
import { map } from 'rxjs/operators';

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
export class HomeComponent implements OnInit {

  constructor(
    private http: UrlService,
    private unsplah: UnsplashService
  ) { }

  private isLoaded = false;
  private lastElem;

  private cardList: any = [];
  private totalAmount = 0;
  ngOnInit() {
    this.getGroups();
    console.log(this.lastElem);

  }

  getGroups() {
    this.unsplah.getGroups()
      .subscribe(
        (data: Response) => {
          this.totalAmount = +data.headers.get('X-Total');
          this.cardList = data.body;
          this.isLoaded = true;
        }
      )
  }

  setBlur(event, card) {
    event ?
      this.cardList.forEach(element => {
        return element === card ? element.blur = false : element.blur = true
      })
      : this.cardList.forEach(element => element.blur = false)
  }
}
