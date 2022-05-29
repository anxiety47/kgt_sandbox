import { DogDetails, DogLevel } from "../models/dog.model";

export const tmpDogDetails : DogDetails =
{
  "id": "1",
  "name": "Puszek",
  "guideName": "Jan Kowalski",
  "breed": "Labrador",
  "dateOfBirth": new Date(),
  "level": DogLevel.ADVANCED,
  "notes": "notatki",
  "kgtTrainings": [
    {
      "id": "11",
      "date": new Date(),
      "location": "Lokalizacja 1"
    }
  ],
  "commercialTrainings": [
    {
      "id": "12",
      "date": new Date(),
      "location": "Lokalizajca 2"
    }
  ]
}