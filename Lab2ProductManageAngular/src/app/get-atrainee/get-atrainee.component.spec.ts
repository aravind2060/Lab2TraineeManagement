import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetATraineeComponent } from './get-atrainee.component';

describe('GetATraineeComponent', () => {
  let component: GetATraineeComponent;
  let fixture: ComponentFixture<GetATraineeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetATraineeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetATraineeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
