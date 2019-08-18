import { Component, OnInit } from '@angular/core';
import { RoutAnimation } from '../common/animations';
import { RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [
    RoutAnimation('routeAnimations'),
  ]
})
export class MainComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    this.router.navigate(['main/home']);
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}
