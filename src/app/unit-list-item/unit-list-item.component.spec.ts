import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitListItemComponent } from './unit-list-item.component';

describe('UnitListItemComponent', () => {
  let component: UnitListItemComponent;
  let fixture: ComponentFixture<UnitListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
