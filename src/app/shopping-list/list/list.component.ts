import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ShoppingList } from '../list-abstraction/list-interface';
import { ListManagerService } from '../list-abstraction/list-manager.service';
import { ListState } from '../list-core/list-state-management/state';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  state$: Observable<ListState>;
  shoppingList$: Observable<ShoppingList>;

  constructor(private manager: ListManagerService) {}

  ngOnInit(): void {
    this.state$ = this.manager.getShoppingLists$();
    this.shoppingList$ = this.state$.pipe(map((state) => state.shoppingList));
  }
}
