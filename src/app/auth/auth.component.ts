import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, RouterOutlet, ActivatedRoute } from '@angular/router';
import { AuthAnimation } from '../common/animations';
import { AuthorizeService } from '../common/services/authorize.service';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: [
        AuthAnimation('routeAnimations'),
    ]
})
export class AuthComponent implements OnInit {

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private authorize: AuthorizeService
    ) { }

    ngOnInit() {
        console.log(this.authorize.isAuthorize());

        this.authorize.isAuthorize() ?
            this.router.navigate(['main/title']) :
            this.router.navigate(['auth/login']);
    }

    prepareRoute(outlet: RouterOutlet) {

        return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    }

}
