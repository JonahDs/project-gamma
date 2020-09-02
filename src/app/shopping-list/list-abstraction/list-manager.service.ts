import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DialogSetting } from 'src/app/popup/dialog-settings';
import { ListState } from '../list-core/list-state-management/state';
import { ListStateManagerService } from '../list-core/list-state-manager.service';
import { AnimatedButton } from './list-interface';

@Injectable({
  providedIn: 'root',
})
export class ListManagerService {
  private selectedItems: Array<boolean> = [];

  dialogSettings: DialogSetting = {
    header: 'Add shopping list',
    content: 'Add a list to your existing shopping lists',
    placeholder: 'Shopping list name',
    confirmation: false,
    cancelText: 'Cancel',
    confirmText: 'Done',
  };

  buttonSettings$: BehaviorSubject<AnimatedButton> = new BehaviorSubject<
    AnimatedButton
  >({ animate: false, color: 'primary' });

  constructor(private stateManager: ListStateManagerService) {}

  getShoppingLists$ = (): Observable<ListState> =>
    this.stateManager.fetchShoppingList$();

  changeSelectedState(checked: boolean): void {
    checked ? this.selectedItems.push(true) : this.selectedItems.pop();
    this.selectedItems.length == 0
      ? this.buttonSettings$.next({ animate: false, color: 'primary' })
      : this.buttonSettings$.next({ animate: true, color: 'warn' });
  }
}
