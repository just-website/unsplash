import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { HomeComponent } from './home/home.component';
import { PopularComponent } from './popular/popular.component';

const routes: Routes = [
    {
        path: 'main', component: MainComponent, children: [
            { path: '', redirectTo: 'home', pathMatch: 'full', data: { animation: 'home' } },
            { path: 'home', component: HomeComponent, data: { animation: 'home' } },
            { path: 'popular', component: PopularComponent, data: { animation: 'popular' } },
            { path: '**', redirectTo: 'home', data: { animation: 'home' } },
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule { }