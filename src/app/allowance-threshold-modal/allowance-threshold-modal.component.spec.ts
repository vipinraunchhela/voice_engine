import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllowanceThresholdModalComponent } from './allowance-threshold-modal.component';

describe('AllowanceThresholdModalComponent', () => {
  let component: AllowanceThresholdModalComponent;
  let fixture: ComponentFixture<AllowanceThresholdModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllowanceThresholdModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllowanceThresholdModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
