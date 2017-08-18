import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

import { PostComponent } from './post.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
  ],
  entryComponents: [
    PostDetailComponent
  ],
  declarations: [
    PostComponent,
    PostDetailComponent
  ]
})
export class PostModule { }
