import { MdDialog } from '@angular/material';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { DataService } from './';
import { CommonList, Tag, Post } from '../models';

import { TagDetailComponent } from '../../admin/tag/tag-detail/tag-detail.component';
import { PostDetailComponent } from '../../admin/post/post-detail/post-detail.component';

@Injectable()
export class DialogService {
    constructor(private dataservice: DataService
        , private dialog: MdDialog) { }

    tagDialog(i: Tag = null) {
        let dialogRef = this.dialog.open(TagDetailComponent);

        if (i != null) {
            dialogRef.componentInstance.vm = i;
        }

        return dialogRef.afterClosed();
    }

    postDialog(i: Post = null) {
        let dialogRef = this.dialog.open(PostDetailComponent);

        if (i != null) {
            dialogRef.componentInstance.vm = i;
        }

        this.dataservice
            .tag
            .getBasicList()
            .subscribe(data => {
                if (i && i.tags) {
                    data.forEach((item) => {
                        if (i.tags.some(x => x.id == item.id)) {
                            item.selected = true;
                        }
                    });
                }

                console.log(data);

                dialogRef.componentInstance.tags = data
            });

        return dialogRef.afterClosed();
    }
}