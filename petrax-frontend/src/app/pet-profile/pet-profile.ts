export class PetProfile {
//   petId: number;
//   petPic: Uint8Array; // Use appropriate type for byte array
  petName: string;
  petType: PetType;
  petBreed: string;
  petAge: number;
  petWeight: number;
  petBirthdate: date;
  petMedication: string;
  petAllergy: string;
  petMicrochip: string;
  petDiagnoses: string;

  constructor(
    petName: string,
//     petPic: Uint8Array,
    petType: PetType,
    petBreed: string,
    petAge: number,
    petWeight: number,
    petBirthdate: date,
    petMedication: string,
    petAllergy: string,
    petMicrochip: string,
    petDiagnoses: string
  ) {
    this.petName = petName;
//     this.petPic = petPic;
    this.petType = petType;
    this.petBreed = petBreed;
    this.petAge = petAge;
    this.petWeight = petWeight;
    this.petBirthdate = petBirthdate;
    this.petMedication = petMedication;
    this.petAllergy = petAllergy;
    this.petMicrochip = petMicrochip;
    this.petDiagnoses = petDiagnoses;
  }

  export enum PetType {
    CAT = 'Cat',
    DOG = 'Dog',
    BIRD = 'Bird',
    FISH = 'Fish',
    REPTILE = 'Reptile',
    OTHER = 'Other'
  }

}


