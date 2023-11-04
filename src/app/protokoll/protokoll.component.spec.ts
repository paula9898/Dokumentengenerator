import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtokollComponent } from './protokoll.component';

describe('ProtokollComponent', () => {
  let component: ProtokollComponent;
  let fixture: ComponentFixture<ProtokollComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProtokollComponent]
    });
    fixture = TestBed.createComponent(ProtokollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
