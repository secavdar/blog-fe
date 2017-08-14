import { Component, OnInit } from '@angular/core';

import { DataService, DialogService } from '../../shared/services';
import { Tag } from '../../shared/models';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {

  private vm: Tag[] = [];

  constructor(private dataService: DataService,
    private dialogService: DialogService) { }

  ngOnInit() {
  }

  deleteTag(i: Tag) {
    this.dataService
      .tag
      .delete(i.id)
      .subscribe(data => console.log(data));
  }

  addTag() {
    this.dialogService
      .addTag()
      .map(data => this.dataService.tag.save(data))
      .subscribe(data => console.log(data));
  }
}
