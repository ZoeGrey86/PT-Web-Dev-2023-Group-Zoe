// src/app/pet-profile.model.ts

export enum PetType {
    CAT = 'Cat',
    DOG = 'Dog',
    BIRD = 'Bird',
    FISH = 'Fish',
    REPTILE = 'Reptile',
    OTHER = 'Other'
  }

// these have to match the conventions in Java exactly and a couple didn't match

export interface PetProfile {

     petId: number;
     petName: string;
     petType: PetType;
     petBreed: string;
     petAge: number;
     petWeight: number;
     petBirthdate: Date;
     petMdication: string;
     petAllergy: string;
     petMicrochip: string;
     petDiagnoses: string;

}
