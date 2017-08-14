import { MdDialog } from '@angular/material';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { DataService } from './';
import { CommonList } from '../models';

import { TagDetailComponent } from '../../admin/tag/tag-detail/tag-detail.component';

@Injectable()
export class DialogService {
    constructor(private dataservice: DataService
        , private dialog: MdDialog) { }

    addTag() {
        let dialogRef = this.dialog.open(TagDetailComponent);
        return dialogRef.afterClosed();
    }
}