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
    this.list();
  }

  list() {
    this.dataService
      .tag
      .getFullList()
      .subscribe(data => this.vm = data);
  }

  changeState(i: Tag) {
    this.dataService
      .tag
      .changeState(i.id)
      .subscribe(data => this.list());
  }

  create() {
    this.dialogService
      .tagDialog()
      .flatMap(data => this.dataService.tag.save(data))
      .subscribe(data => this.list());
  }

  edit(i: Tag) {
    this.dialogService
      .tagDialog(i)
      .flatMap(data => this.dataService.tag.save(data))
      .subscribe(data => this.list());
  }
}
