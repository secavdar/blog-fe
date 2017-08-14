import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommentComponent } from './comment.component';

const routes: Routes = [
  {
    path: 'admin/comment',
    component: CommentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentRoutingModule { }
