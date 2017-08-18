import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { DialogService } from '../shared/services';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    HomeRoutingModule
  ],
  providers: [
    DialogService
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }
