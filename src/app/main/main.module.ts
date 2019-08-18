import { MainComponent } from './main.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main.routing-module';
import { AppCommonModule } from '../common/common.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { PopularComponent } from './popular/popular.component';
import { ToggleActiveDirective } from '../common/directives/toggleActive.directive';
import { CardItemComponent } from './card-item/card-item.component';
import { CollectionComponent } from './collection/collection.component';
import { PhotoItemComponent } from './photo-item/photo-item.component';
import { PhotoModal } from '../common/services/photo-modal.service';

@NgModule({
    declarations: [
        MainComponent,
        MainMenuComponent,
        MainHeaderComponent,
        HomeComponent,
        PopularComponent,
        ToggleActiveDirective,
        CardItemComponent,
        CollectionComponent,
        PhotoItemComponent
    ],
    imports: [
        CommonModule,
        MainRoutingModule,
        AppCommonModule,
        HttpClientModule,
    ],
    providers: [
        PhotoModal
    ]
})

export class MainModule { }