import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimatedMatIconComponent } from '../animated-mat-icon/animated-mat-icon.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [AnimatedMatIconComponent],
  imports: [CommonModule, MaterialModule],
  exports: [AnimatedMatIconComponent],
})
export class SharedModule {}
