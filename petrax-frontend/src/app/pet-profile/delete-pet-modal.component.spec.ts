import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePetModalComponent } from './delete-pet-modal.component';

describe('DeletePetModalComponent', () => {
  let component: DeletePetModalComponent;
  let fixture: ComponentFixture<DeletePetModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletePetModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePetModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
