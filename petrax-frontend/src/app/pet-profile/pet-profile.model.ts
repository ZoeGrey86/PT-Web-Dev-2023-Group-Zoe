// src/app/pet-profile.model.ts

export enum PetType {
    CAT = '🐈',
    DOG = '🐕',
    BIRD = '🦜',
    FISH = '🐠',
    REPTILE = '🦎',
    OTHER = '❤️'
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
