import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DialogInjectComponent } from 'src/app/popup/dialog-inject/dialog-inject.component';
import {
  AnimatedButton,
  ShoppingList,
} from '../list-abstraction/list-interface';
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
  buttonSettings$: Observable<AnimatedButton>;

  dialogSettings = this.manager.dialogSettings;
  constructor(private manager: ListManagerService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.state$ = this.manager.getShoppingLists$();
    this.shoppingList$ = this.state$.pipe(map((state) => state.shoppingList));
    this.buttonSettings$ = this.manager.buttonSettings$.asObservable();
  }

  isItemSelected(event: boolean): void {
    this.manager.changeSelectedState(event);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogInjectComponent, {
      width: '225px',
      data: this.dialogSettings,
    });

    dialogRef.afterClosed().subscribe((result) => console.log(result));
  }
}
