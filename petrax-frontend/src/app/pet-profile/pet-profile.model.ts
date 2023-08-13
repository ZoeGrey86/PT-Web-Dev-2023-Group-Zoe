// src/app/pet-profile.model.ts

export enum PetType {
    CAT = 'Cat',
    DOG = 'Dog',
    BIRD = 'Bird',
    FISH = 'Fish',
    REPTILE = 'Reptile',
    OTHER = 'Other'
  }

export interface PetProfile {

     petId: number;
     petName: string;
     petType: PetType;
     petBreed: string;
     petAge: number;
     petWeight: number;
     petBirthdate: Date;
     petMedication: string;
     petAllergy: string;
     petMicrochip: string;
     petDiagnoses: string;

}
