import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPetModalComponent } from './add-pet-modal.component';

describe('AddPetModalComponent', () => {
  let component: AddPetModalComponent;
  let fixture: ComponentFixture<AddPetModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPetModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPetModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
