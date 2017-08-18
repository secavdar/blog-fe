import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { PostComponent } from './post/post.component';
import { TagComponent } from './tag/tag.component';
import { CommentComponent } from './comment/comment.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'post',
        component: PostComponent
      },
      {
        path: 'tag',
        component: TagComponent
      },
/*       {
        path: 'comment',
        component: CommentComponent
      } */
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
