import { Injectable } from '@angular/core';

import { DashBoardConfig } from './dashboard-config';

@Injectable({
  providedIn: 'root',
})
export class DashboardManagerService {
  private dashBoardConfig: Array<DashBoardConfig> = [
    {
      text: 'Shopping list',
      cols: 2,
      rows: 3,
      color: 'lightblue',
      routerLink: '/shopping',
    },
    {
      text: 'Recepies',
      cols: 2,
      rows: 4,
      color: 'lightpink',
      routerLink: '/recepies',
    },
    {
      text: 'Images',
      cols: 2,
      rows: 1,
      color: 'lightgreen',
      routerLink: '/images',
    },
  ];

  getDashBoardCondif = (): Array<DashBoardConfig> => this.dashBoardConfig;
}
