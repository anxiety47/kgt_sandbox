import { DogDetails, DogLevel } from "../../models/dog.model";

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
      "location": "Lokalizacja 1",
      "trailLength": 123,
      "timeOfDelay": "15 min"
    },
    {
      "id": "12",
      "date": new Date(),
      "location": "Lokalizacja 2",
      "trailLength": 321,
      "timeOfDelay": "45 min"
    }
  ],
  "commercialTrainings": [
    {
      "id": "21",
      "date": new Date(),
      "location": "Lokalizacja 2",
      "trailLength": 500,
      "timeOfDelay": "30 min"
    }
  ]
}