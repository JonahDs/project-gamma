import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import { StoreModule } from '@ngrx/store';
import { ListEffects } from '../list-core/list-state-management/list-effects';
import { EffectsModule } from '@ngrx/effects';
import { listReducer } from '../list-core/list-state-management/list-reducer';
import { HttpClientModule } from '@angular/common/http';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListComponent],
      imports: [
        EffectsModule.forRoot([ListEffects]),
        StoreModule.forRoot({ shoppingList: listReducer }),
        HttpClientModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
