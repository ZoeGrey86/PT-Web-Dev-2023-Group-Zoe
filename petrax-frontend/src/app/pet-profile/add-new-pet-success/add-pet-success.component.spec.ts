import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPetSuccessComponent } from './add-pet-success.component';

describe('AddPetSuccessComponent', () => {
  let component: AddPetSuccessComponent;
  let fixture: ComponentFixture<AddPetSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPetSuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPetSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
