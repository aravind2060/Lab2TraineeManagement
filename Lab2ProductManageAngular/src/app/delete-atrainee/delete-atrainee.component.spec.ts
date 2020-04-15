import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteATraineeComponent } from './delete-atrainee.component';

describe('DeleteATraineeComponent', () => {
  let component: DeleteATraineeComponent;
  let fixture: ComponentFixture<DeleteATraineeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteATraineeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteATraineeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
