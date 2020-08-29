import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { fetchList, isFetching } from './list-state-management/list-actions';
import { ListState } from './list-state-management/state';

@Injectable({
  providedIn: 'root',
})
export class ListStateManagerService {
  private state$: Observable<ListState> = this.store.pipe(
    select('shoppingList')
  );

  constructor(private store: Store<{ shoppingList: ListState }>) {}

  fetchShoppingList$(): Observable<ListState> {
    this.store.dispatch(isFetching());
    this.store.dispatch(fetchList());

    return this.state$;
  }
}
