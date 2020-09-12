import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailHolderComponent } from './detail-holder.component';

describe('DetailHolderComponent', () => {
  let component: DetailHolderComponent;
  let fixture: ComponentFixture<DetailHolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailHolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
