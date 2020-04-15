import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllTraineesComponent } from './get-all-trainees.component';

describe('GetAllTraineesComponent', () => {
  let component: GetAllTraineesComponent;
  let fixture: ComponentFixture<GetAllTraineesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAllTraineesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllTraineesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
