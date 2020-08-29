import { Component, Input } from '@angular/core';
import { ShoppingListElement } from '../list-abstraction/list-interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {
  @Input() item: ShoppingListElement;
}
