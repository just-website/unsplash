import { Component, OnInit } from '@angular/core';
import { AuthAnimation } from '../common/animations';
import { RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [
    AuthAnimation('routeAnimations'),
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
