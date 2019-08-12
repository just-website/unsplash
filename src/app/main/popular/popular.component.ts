import { Component, OnInit } from '@angular/core';
import { UnsplashService } from 'src/app/common/services/unsplash.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss']
})
export class PopularComponent implements OnInit {

  constructor(
    private unsplash: UnsplashService
  ) { }

  ngOnInit() {
  }

  getPhoto() {
    console.log(this.unsplash.getRandomPhoto());
  }

}
