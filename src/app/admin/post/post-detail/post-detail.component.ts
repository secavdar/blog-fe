import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

import { Post, CommonList, ItemChangeState } from '../../../shared/models';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  public vm: Post = new Post();
  public tags: CommonList[] = [];

  constructor(private dialogRef: MdDialogRef<PostDetailComponent>) { }

  ngOnInit() {
  }

  toggleCheckBox(e) {
    if (!this.vm) {
      this.vm = new Post();
    }

    if (!this.vm.tags) {
      this.vm.tags = [];
    }

    const checked: boolean = e.checked;
    const id: number = e.source.value;

    if (checked) {
      const tag: CommonList = new CommonList();
      tag.id = id;
      tag.state = ItemChangeState.Added;

      this.vm.tags = [...this.vm.tags, tag];
    }
    else {
      const tag: CommonList = this.vm.tags.find(x => x.id === id);

      if (tag.state == ItemChangeState.Added) {
        this.vm.tags = this.vm.tags.filter(x => x.id !== id);
      }
      else {
        tag.state = ItemChangeState.Deleted;
      }
    }
  }
}
