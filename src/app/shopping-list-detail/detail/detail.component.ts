import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../detail-abstraction/details.interface';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent {
  @Input() item: Item;
}
