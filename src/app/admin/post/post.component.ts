import { Component, OnInit } from '@angular/core';

import { DataService, DialogService } from '../../shared/services';
import { Post } from '../../shared/models';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  private vm: Post[] = [];

  constructor(private dataService: DataService,
    private dialogService: DialogService) { }

  ngOnInit() {
    this.list();
  }

  list() {
    this.dataService
      .post
      .fullList()
      .subscribe(data => this.vm = data);
  }

  changeState(i: Post) {
    this.dataService
      .post
      .changeState(i.id)
      .subscribe(data => this.list());
  }

  create() {
    this.dialogService
      .postDialog()
      .subscribe(data => this.checkDataAndSave(data));
  }

  edit(i: Post) {
    this.dialogService
      .postDialog(i)
      .subscribe(data => this.checkDataAndSave(data));
  }

  checkDataAndSave(data) {
    if (data) {
      this.dataService.post.save(data).subscribe(x => this.list());
    }
  }
}
