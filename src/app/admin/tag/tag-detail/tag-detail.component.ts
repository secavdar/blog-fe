import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

import { Tag } from '../../../shared/models';

@Component({
  selector: 'app-tag-detail',
  templateUrl: './tag-detail.component.html',
  styleUrls: ['./tag-detail.component.css']
})
export class TagDetailComponent implements OnInit {

  private vm: Tag = new Tag();

  constructor(private dialogRef: MdDialogRef<TagDetailComponent>) { }

  ngOnInit() {
  }

}
