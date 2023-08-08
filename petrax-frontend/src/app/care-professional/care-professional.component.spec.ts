import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareProfessionalComponent } from './care-professional.component';

describe('CareProfessionalComponent', () => {
  let component: CareProfessionalComponent;
  let fixture: ComponentFixture<CareProfessionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareProfessionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CareProfessionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
