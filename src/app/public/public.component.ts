import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { MenuLink } from '../shared/models';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PublicComponent implements OnInit {

  private menuLinks : MenuLink[] = [
    {
      icon: '',
      name: 'Ana Sayfa',
      routerLink: ''
    },
    {
      icon: '',
      name: 'Hakkında',
      routerLink: '/about'
    },
    {
      icon: '',
      name: 'Yönetim',
      routerLink: '/admin'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
