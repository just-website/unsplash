import { Component, OnInit, ErrorHandler, ViewEncapsulation } from '@angular/core';
import { UrlService } from 'src/app/common/services/url.service';
import { map } from 'rxjs/operators';
import { CardShowAnimation } from 'src/app/common/animations';
import { UnsplashService } from 'src/app/common/services/unsplash.service';

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

  private cardList: any = [];
  ngOnInit() {
    this.getGroups();

  }

  getGroups() {
    this.unsplah.getGroups()
      .subscribe(
        data => {
          this.cardList = data;
          console.log(data);

        }
      )

  }



}
