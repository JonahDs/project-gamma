import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DetailState } from '../detail-core/detail-state-management/detail-state';
import { DetailStateManagerService } from '../detail-core/detail-state-manager.service';

@Injectable({
  providedIn: 'root',
})
export class DetailManagerService {
  constructor(private stateManager: DetailStateManagerService) {}

  getDetails$ = (id: string): Observable<DetailState> =>
    this.stateManager.fetchDetails$(id);
}
