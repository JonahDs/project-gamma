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
  @Output() details = new EventEmitter();

  change(event: MatCheckboxChange): void {
    this.changed.emit(event.checked);
  }

  navigateToDetails(): void {
    this.details.emit(this.item._id);
  }
}
