import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MdProgressBarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TagModule } from './admin/tag/tag.module';
import { PostModule } from './admin/post/post.module';
import { CommentModule } from './admin/comment/comment.module';

import { AppComponent } from './app.component';
import { TagComponent } from './admin/tag/tag.component';
import { PostComponent } from './admin/post/post.component';
import { CommentComponent } from './admin/comment/comment.component';
import { HomeComponent } from './home/home.component';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { HttpService } from './http.service';

import { DataService, HttpInterceptorService, ToastrService, LoaderService } from './shared/services';

const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'AppComponent',
  },
];

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    FlexLayoutModule,
    MdProgressBarModule,
    BrowserAnimationsModule,
    TagModule,
/*     PostModule,
    CommentModule */
  ],
  providers: [
    DataService,
    HttpInterceptorService,
    ToastrService,
    {
      provide: Http,
      useFactory: HttpService,
      deps: [XHRBackend, RequestOptions, ToastrService, LoaderService],
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
