import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/user-profile', title: 'Add User',  icon:'person', class: '' },
    { path: '/table-list', title: 'Agent List',  icon:'content_paste', class: '' },
    { path: '/table-list', title: 'Client List',  icon:'content_paste', class: '' },
    { path: '/table-list', title: 'Properties',  icon:'library_books', class: '' },
    { path: '/user-profile', title: 'Add Property',  icon:'unarchive', class: 'active-pro' },
    { path: '/table-list', title: 'Projects',  icon:'bubble_chart', class: '' },
    { path: '/user-profile', title: 'Add Project',  icon:'bubble_chart', class: '' },
    { path: '/table-list', title: 'Leads',  icon:'location_on', class: '' },
    { path: '/user-profile', title: 'Add Lead',  icon:'location_on', class: '' },
    { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
