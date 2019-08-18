import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { RoutAnimation, ShowHideAnimation } from '../common/animations';
import { RouterOutlet, Router } from '@angular/router';
import { PhotoModal } from '../common/services/photo-modal.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [
    RoutAnimation('routeAnimations'),
    ShowHideAnimation('modalAnimation')
  ]
})
export class MainComponent implements OnInit {

  constructor(
    private router: Router,
    private modal: PhotoModal,
  ) { }


  ngOnInit() {
    this.router.navigate(['main/home']);
  }


  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  resetScroll() {
    window.scroll(0, 0);
  }





}
