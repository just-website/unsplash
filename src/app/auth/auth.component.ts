import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, RouterOutlet, ActivatedRoute } from '@angular/router';
import { RoutAnimation } from '../common/animations';
import { AuthorizeService } from '../common/services/authorize.service';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: [
        RoutAnimation('routeAnimations'),
    ]
})
export class AuthComponent implements OnInit {

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private authorize: AuthorizeService
    ) { }

    ngOnInit() {
        if (this.authorize.isAuthorize()) {
            this.router.navigate(['main'])
        } else {
            this.router.navigate(['auth/login'])
        }
    }

    prepareRoute(outlet: RouterOutlet) {

        return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    }

}
