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
     name: string;
     petType: PetType;
     breed: string;
     age: number;
     weight: number;
     birthday: Date;
     medication: string;
     allergy: string;
     microchip: string;
     diagnoses: string;

}
