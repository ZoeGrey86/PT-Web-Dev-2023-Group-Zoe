import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCareProfessionalComponent } from './add-care-professional.component';

describe('AddCareProfessionalComponent', () => {
  let component: AddCareProfessionalComponent;
  let fixture: ComponentFixture<AddCareProfessionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCareProfessionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCareProfessionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
