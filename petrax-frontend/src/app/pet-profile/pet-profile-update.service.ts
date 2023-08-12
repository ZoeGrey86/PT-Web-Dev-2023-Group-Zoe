import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PetProfileUpdateService {
  private petDeletedSubject = new Subject<number>();

  petDeleted$ = this.petDeletedSubject.asObservable();

  triggerPetDeleted(petId: number) {
    this.petDeletedSubject.next(petId);
  }
}
