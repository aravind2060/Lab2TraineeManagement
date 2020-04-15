import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateATraineeComponent } from './update-atrainee.component';

describe('UpdateATraineeComponent', () => {
  let component: UpdateATraineeComponent;
  let fixture: ComponentFixture<UpdateATraineeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateATraineeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateATraineeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
