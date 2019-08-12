import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthComponent } from './auth.component';
import { RestoreComponent } from './restore/restore.component';

const routes: Routes = [
    {
        path: 'auth', component: AuthComponent, children: [
            { path: '', redirectTo: 'login', pathMatch: 'full', data: { animation: 'login' } },
            { path: 'login', component: LoginComponent, data: { animation: 'login' } },
            { path: 'registration', component: RegistrationComponent, data: { animation: 'registration' } },
            { path: 'restore', component: RestoreComponent, data: { animation: 'restore' } },
            { path: '**', redirectTo: 'login', data: { animation: 'login' } }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }