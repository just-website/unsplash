import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { RoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { AuthorizeService } from './common/services/authorize.service';
import { MainModule } from './main/main.module';
import { UrlService } from './common/services/url.service';
import { UnsplashService } from './common/services/unsplash.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    BrowserAnimationsModule,
    AuthModule,
    MainModule,
    HttpClientModule,
  ],
  providers: [
    AuthorizeService,
    UrlService,
    UnsplashService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
