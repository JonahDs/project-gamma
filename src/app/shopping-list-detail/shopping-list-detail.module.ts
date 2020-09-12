import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { DetailEffects } from './detail-core/detail-state-management/detail-effects';
import { detailReducer } from './detail-core/detail-state-management/detail-reducer';
import { DetailHolderComponent } from './detail-holder/detail-holder.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  {
    path: '',
    component: DetailHolderComponent,
  },
];

@NgModule({
  declarations: [DetailHolderComponent, DetailComponent],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    EffectsModule.forFeature([DetailEffects]),
    StoreModule.forFeature('details', detailReducer),
    RouterModule.forChild(routes),
  ],
})
export class ShoppingListDetailModule {}
