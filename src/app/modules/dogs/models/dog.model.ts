import { Training } from "./training.model";

export interface Dog {
  id: string;
  name: string;
  breed: string;
  guideName: string;
  // photo
}

export enum DogLevel {
  BEGINNER = 'Początkujący',
  INTERMEDIATE = "Średniozaawansowany",
  ADVANCED = "Zaawansowany"
}

export interface DogDetails {
  id: string;
  name: string;
  guideName: string;
  breed: string;
  dateOfBirth: Date;
  level: DogLevel;
  notes: string;
  // photo
  kgtTrainings: Training[];
  commercialTrainings: Training[];
}