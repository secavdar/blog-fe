import { Component, OnInit } from '@angular/core';

import { DataService } from '../shared/services';

import { Post } from '../shared/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private posts: Post[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getActivePostList();
  }

  getActivePostList() {
    this.dataService
      .post
      .activeList()
      .subscribe(data => this.posts = data);
  }

}
