import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { DetailManagerService } from '../detail-abstraction/detail-manager.service';
import { DetailState } from '../detail-core/detail-state-management/detail-state';

@Component({
  selector: 'app-detail-holder',
  templateUrl: './detail-holder.component.html',
  styleUrls: ['./detail-holder.component.scss'],
})
export class DetailHolderComponent implements OnInit {
  details$: Observable<DetailState>;

  constructor(
    private manager: DetailManagerService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.details$ = this.route.params.pipe(
      switchMap((params) => this.manager.getDetails$(params['id']))
    );
  }
}
