import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-animated-mat-icon',
  templateUrl: './animated-mat-icon.component.html',
  styleUrls: ['./animated-mat-icon.component.scss'],
})
export class AnimatedMatIconComponent {
  @Input() start: string;
  @Input() end: string;
  @Input() animate: boolean;
  @Input() animateFromParent?: boolean = false;

  toggle() {
    if (!this.animateFromParent) this.animate = !this.animate;
  }
}
