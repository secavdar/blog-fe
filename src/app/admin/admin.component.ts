import { Component, OnInit } from '@angular/core';

import { MenuLink } from '../shared/models';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  private menuLinks : MenuLink[] = [
    {
      name: 'Gönderiler',
      routerLink: 'post'
    },
    {
      name: 'Etiketler',
      routerLink: 'tag'
    },
    {
      name: 'Yorumlar',
      routerLink: 'comment'
    }
  ];
  private title: string = 'serdarcavdar.Net';

  constructor() { }

  ngOnInit() {
  }

}
