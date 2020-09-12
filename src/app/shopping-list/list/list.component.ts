import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { AnimatedButton } from 'src/app/animated-mat-icon/animated-mat-icon-settings.interface';
import { DialogInjectComponent } from 'src/app/popup/dialog-inject/dialog-inject.component';
import {
  CreateShoppingListElement,
  ShoppingListElement,
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
  shoppingList$: Observable<ShoppingListElement[]>;
  buttonSettings$: Observable<AnimatedButton>;

  dialogSettings = this.manager.dialogSettings;
  constructor(
    private manager: ListManagerService,
    public dialog: MatDialog,
    private router: Router
  ) {}

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

    dialogRef
      .afterClosed()
      .pipe(
        map(
          (result) =>
            <CreateShoppingListElement>{
              name: result,
            }
        ),
        switchMap((result) => this.manager.postShoppingListElement$(result))
      )
      .subscribe((result) =>
        this.navigateToDetails(
          result.shoppingList[result.shoppingList.length - 1]._id
        )
      );
  }

  navigateToDetails = (id: number) => this.router.navigate(['/details', id]);
}
