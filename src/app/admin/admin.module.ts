import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';
import { MaterialModule, MdProgressBarModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AdminRoutingModule } from './admin-routing.module';
import { PostModule } from './post/post.module';
import { TagModule } from './tag/tag.module';
import { AdminComponent } from './admin.component';

import { HttpService } from '../http.service';

import { DataService, HttpInterceptorService, ToastrService, DialogService } from '../shared/services';

@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AdminRoutingModule,
    HttpModule,
    FlexLayoutModule,
    MdProgressBarModule,
    BrowserAnimationsModule,
    MaterialModule,
    PostModule,
    TagModule
  ],
  providers: [
    DataService,
    HttpInterceptorService,
    ToastrService,
    DialogService,
    {
      provide: Http,
      useFactory: HttpService,
      deps: [XHRBackend, RequestOptions, ToastrService],
    },
  ],
  bootstrap: [AdminComponent]
})
export class AdminModule { }
