import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicabletimeTodWodModalComponent } from './applicabletime-tod-wod-modal.component';

describe('ApplicabletimeTodWodModalComponent', () => {
  let component: ApplicabletimeTodWodModalComponent;
  let fixture: ComponentFixture<ApplicabletimeTodWodModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicabletimeTodWodModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicabletimeTodWodModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
