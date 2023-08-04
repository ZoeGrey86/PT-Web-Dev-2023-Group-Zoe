import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDetailModalComponent } from './event-detail-modal.component';

describe('EventDetailModalComponent', () => {
  let component: EventDetailModalComponent;
  let fixture: ComponentFixture<EventDetailModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventDetailModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventDetailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
