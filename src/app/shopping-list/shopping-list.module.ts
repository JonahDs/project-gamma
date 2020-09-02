import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { ListEffects } from './list-core/list-state-management/list-effects';
import { StoreModule } from '@ngrx/store';
import { listReducer } from './list-core/list-state-management/list-reducer';
import { ListComponent } from './list/list.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule, Routes } from '@angular/router';
import { ItemComponent } from './item/item.component';
import { AnimatedMatIconComponent } from '../animated-mat-icon/animated-mat-icon.component';
import { DialogInjectComponent } from '../popup/dialog-inject/dialog-inject.component';

const routes: Routes = [
  {
    path: '',
    component: ListComponent,
  },
];

@NgModule({
  declarations: [
    ListComponent,
    ItemComponent,
    AnimatedMatIconComponent,
    DialogInjectComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    EffectsModule.forFeature([ListEffects]),
    StoreModule.forFeature('shoppingList', listReducer),
    RouterModule.forChild(routes),
  ],
  entryComponents: [DialogInjectComponent],
})
export class ShoppingListModule {}
