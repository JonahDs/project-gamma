import { Injectable } from '@angular/core';

import { DashBoardConfig } from './dashboard-config';

@Injectable({
  providedIn: 'root',
})
export class DashboardManagerService {
  private dashBoardConfig: Array<DashBoardConfig> = [
    { text: 'Shopping list', cols: 3, rows: 3, color: 'lightblue' },
    { text: 'Recepies', cols: 1, rows: 4, color: 'lightpink' },
    { text: 'Images', cols: 3, rows: 1, color: 'lightgreen' },
  ];

  getDashBoardCondif = (): Array<DashBoardConfig> => this.dashBoardConfig;
}
