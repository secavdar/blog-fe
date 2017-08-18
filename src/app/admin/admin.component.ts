import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { MenuLink } from '../shared/models';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AdminComponent implements OnInit {

  private menuLinks : MenuLink[] = [
    {
      icon: 'home',
      name: 'Home',
      routerLink: ''
    },
    {
      icon: 'content_copy',
      name: 'Posts',
      routerLink: '/admin'
    },
    {
      icon: 'label',
      name: 'Tags',
      routerLink: '/admin/tag'
    },
    {
      icon: 'comment',
      name: 'Comments',
      routerLink: '/admin/comment'
    }
  ];
  
  private title: string = 'serdarcavdar.Net';

  constructor() { }

  ngOnInit() {
  }

}
