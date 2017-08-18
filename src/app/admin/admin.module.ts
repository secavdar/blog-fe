import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { PostModule } from './post/post.module';
import { TagModule } from './tag/tag.module';
import { CommentModule } from './comment/comment.module';

import { HttpService } from './http.service';

import { DataService, HttpInterceptorService, ToastrService, DialogService } from '../shared/services';

@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpModule,
    FlexLayoutModule,
    MaterialModule,
    PostModule,
    TagModule,
    CommentModule
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
  ]
})
export class AdminModule { }
