import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProfessionalComponent } from './update-professional.component';

describe('UpdateProfessionalComponent', () => {
  let component: UpdateProfessionalComponent;
  let fixture: ComponentFixture<UpdateProfessionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateProfessionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateProfessionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
