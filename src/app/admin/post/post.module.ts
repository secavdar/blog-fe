import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { DialogService, LoaderService } from '../../shared/services';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    PostRoutingModule
  ],
  entryComponents: [
    PostDetailComponent
  ],
  providers: [
    DialogService,
    LoaderService
  ],
  declarations: [
    PostComponent,
    PostDetailComponent
  ]
})
export class PostModule { }
