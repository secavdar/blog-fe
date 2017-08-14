import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { TagRoutingModule } from './tag-routing.module';
import { TagComponent } from './tag.component';
import { TagDetailComponent } from './tag-detail/tag-detail.component';
import { DialogService, LoaderService } from '../../shared/services';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    TagRoutingModule
  ],
  entryComponents: [
    TagDetailComponent
  ],
  providers: [
    DialogService,
    LoaderService
  ],
  declarations: [
    TagComponent,
    TagDetailComponent
  ]
})
export class TagModule { }
