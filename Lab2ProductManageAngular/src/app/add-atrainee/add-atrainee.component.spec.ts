import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddATraineeComponent } from './add-atrainee.component';

describe('AddATraineeComponent', () => {
  let component: AddATraineeComponent;
  let fixture: ComponentFixture<AddATraineeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddATraineeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddATraineeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
