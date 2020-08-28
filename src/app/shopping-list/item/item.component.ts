import { Component, Input, OnInit } from '@angular/core';
import { ShoppingListElement } from '../list-data/list-interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {
  @Input() item: ShoppingListElement;
}
