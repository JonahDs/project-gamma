import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MaterialModule } from '../material/material.module';
import { DialogInjectComponent } from '../popup/dialog-inject/dialog-inject.component';
import { SharedModule } from '../shared/shared.module';
import { ItemComponent } from './item/item.component';
import { ListEffects } from './list-core/list-state-management/list-effects';
import { listReducer } from './list-core/list-state-management/list-reducer';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {
    path: '',
    component: ListComponent,
  },
  {
    path: 'details/:id',
    loadChildren: () =>
      import('../shopping-list-detail/shopping-list-detail.module').then(
        (m) => m.ShoppingListDetailModule
      ),
  },
];

@NgModule({
  declarations: [ListComponent, ItemComponent, DialogInjectComponent],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    EffectsModule.forFeature([ListEffects]),
    StoreModule.forFeature('shoppingList', listReducer),
    RouterModule.forChild(routes),
  ],
  entryComponents: [DialogInjectComponent],
})
export class ShoppingListModule {}
