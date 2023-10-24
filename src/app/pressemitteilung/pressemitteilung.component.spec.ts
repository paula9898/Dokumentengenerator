import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PressemitteilungComponent } from './pressemitteilung.component';

describe('PressemitteilungComponent', () => {
  let component: PressemitteilungComponent;
  let fixture: ComponentFixture<PressemitteilungComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PressemitteilungComponent]
    });
    fixture = TestBed.createComponent(PressemitteilungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
