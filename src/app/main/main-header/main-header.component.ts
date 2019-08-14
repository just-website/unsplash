import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UserService } from 'src/app/common/services/user.service';
import { AuthorizeService } from 'src/app/common/services/authorize.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MainHeaderComponent implements OnInit {

  private userName: string;
  private isAthorize: boolean;
  constructor(
    private authorize: AuthorizeService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.setUserName();
    console.log('isAthorize', this.authorize.isAuthorize());
    this.isAthorize = this.authorize.isAuthorize();

  }

  logout() {
    this.authorize.logout();
    this.router.navigate(['/auth']);
    console.log('test');

  }

  setUserName() {
    if (this.authorize.isAuthorize()) {
      this.userName = this.authorize.getUserName();
    } else {
      this.userName = 'Не авторизован';
    }
  }

  showAbout() {
    console.log('test');

  }
}
