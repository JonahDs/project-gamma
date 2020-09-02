import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { ShoppingListElement } from '../list-abstraction/list-interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {
  @Input() item: ShoppingListElement;
  @Output() changed = new EventEmitter();

  change(event: MatCheckboxChange) {
    this.changed.emit(event.checked);
  }
}
