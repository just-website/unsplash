import { Component, OnInit, ViewEncapsulation, ElementRef, HostListener, ViewChild, Renderer2 } from '@angular/core';
import { UserService } from 'src/app/common/services/user.service';
import { AuthorizeService } from 'src/app/common/services/authorize.service';
import { Router } from '@angular/router';
import { Observable, fromEvent } from 'rxjs';
import { debounce, debounceTime, throttleTime } from 'rxjs/operators';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MainHeaderComponent implements OnInit {

  private userName: string;
  private isAuthorize: boolean;
  constructor(
    private authorize: AuthorizeService,
    private router: Router,
    private element: ElementRef,
    private render: Renderer2
  ) { }

  @ViewChild('header', { static: false }) header: ElementRef;
  private scrollEvent = fromEvent(window, 'scroll');


  ngOnInit() {
    this.setUserName();
    this.isAuthorize = this.authorize.isAuthorize();
    this.detectScroll();
  }


  detectScroll() {
    this.scrollEvent
      .pipe(
        // debounceTime(100)
      )
      .subscribe(
        () => {
          if (window.pageYOffset > 70) {
            this.render.addClass(this.header.nativeElement, 'fixed');
          } else {
            this.render.removeClass(this.header.nativeElement, 'fixed');
          }
        }
      )
  }

  logout() {
    this.authorize.logout();
    this.router.navigate(['/auth']);
  }

  setUserName() {
    if (this.authorize.isAuthorize()) {
      this.userName = this.authorize.getUserName();
    } else {
      this.userName = 'Не авторизован';
    }
  }

  showAbout() {
    console.log('showAbout');
  }
}
