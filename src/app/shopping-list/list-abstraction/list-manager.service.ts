import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListState } from '../list-core/list-state-management/state';
import { ListStateManagerService } from '../list-core/list-state-manager.service';

@Injectable({
  providedIn: 'root',
})
export class ListManagerService {
  constructor(private stateManager: ListStateManagerService) {}

  getShoppingLists$ = (): Observable<ListState> =>
    this.stateManager.fetchShoppingList$();
}
