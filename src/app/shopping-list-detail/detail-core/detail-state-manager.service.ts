import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  fetchDetails,
  isFetching,
} from './detail-state-management/detail-actions';
import { DetailState } from './detail-state-management/detail-state';

@Injectable({
  providedIn: 'root',
})
export class DetailStateManagerService {
  private state$: Observable<DetailState> = this.store.pipe(select('details'));

  constructor(private store: Store<{ details: DetailState }>) {}

  fetchDetails$(id: string): Observable<DetailState> {
    this.store.dispatch(isFetching());
    this.store.dispatch(fetchDetails({ id }));

    return this.state$;
  }
}
