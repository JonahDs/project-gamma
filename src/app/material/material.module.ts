import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatRippleModule} from '@angular/material/core';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ], exports: [
    MatGridListModule,
    MatRippleModule
  ]
})
export class MaterialModule { }
