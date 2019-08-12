import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component'
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full', data: { animation: 'auth' } },
  { path: 'auth', component: AuthComponent },
  { path: 'main', component: MainComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }