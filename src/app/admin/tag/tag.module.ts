import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { TagComponent } from './tag.component';
import { TagDetailComponent } from './tag-detail/tag-detail.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  entryComponents: [
    TagDetailComponent
  ],
  declarations: [
    TagComponent,
    TagDetailComponent
  ]
})
export class TagModule { }
