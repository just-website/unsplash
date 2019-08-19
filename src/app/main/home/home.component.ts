import { Component, OnInit, ErrorHandler, ViewEncapsulation } from '@angular/core';
import { UrlService } from 'src/app/common/services/url.service';
import { CardShowAnimation } from 'src/app/common/animations';
import { UnsplashService } from 'src/app/common/services/unsplash.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    CardShowAnimation('listAnimation')
  ]

})
export class HomeComponent implements OnInit {

  constructor(
    private http: UrlService,
    private unsplah: UnsplashService
  ) { }

  private isLoaded = false;

  private cardList: any = [];
  ngOnInit() {
    this.getGroups();
  }

  getGroups() {
    this.unsplah.getGroups()
      .subscribe(
        (data: Response) => {
          console.log(data.headers.get('X-Total'));

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
