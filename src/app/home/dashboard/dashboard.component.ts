import { Component, OnInit } from '@angular/core';
import { DashboardManagerService } from '../dashboard-data/dashboard-manager.service';
import { DashBoardConfig } from '../dashboard-data/dashboard-config';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  dashBoardConfig: Array<DashBoardConfig>

  constructor(private manager: DashboardManagerService) { }

  ngOnInit(): void {
    this.dashBoardConfig = this.manager.getDashBoardCondif()
  }

}
