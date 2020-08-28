import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShoppingList } from '../list-data/list-interface';
import { ListManagerService } from '../list-data/list-manager.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  shoppinglist$: Observable<ShoppingList>;

  constructor(private manager: ListManagerService) {}

  ngOnInit(): void {
    this.shoppinglist$ = this.manager.getShoppingList();
  }
}
