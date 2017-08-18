import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule, MdProgressBarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AdminModule } from './admin/admin.module';
import { HomeModule } from './home/home.module';

import { AppComponent } from './app.component';
import { HttpService } from './http.service';

import { DataService, HttpInterceptorService, ToastrService } from './shared/services';

const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'AppComponent',
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    FlexLayoutModule,
    MdProgressBarModule,
    BrowserAnimationsModule,
    MaterialModule,
    AdminModule,
    HomeModule
  ],
  providers: [
    DataService,
    HttpInterceptorService,
    ToastrService,
    {
      provide: Http,
      useFactory: HttpService,
      deps: [XHRBackend, RequestOptions, ToastrService],
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
