import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';

import { HttpService } from './http.service';

import { DataService, HttpInterceptorService } from '../shared/services';

@NgModule({
  declarations: [
    PublicComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    HomeModule,
    AboutModule
  ],
  providers: [
    DataService,
    HttpInterceptorService,
    {
      provide: Http,
      useFactory: HttpService,
      deps: [XHRBackend, RequestOptions],
    },
  ]
})
export class PublicModule { }
