import { InMemoryDbService } from "angular-in-memory-web-api";
import { Dog, DogDetails, DogLevel } from "src/app/modules/dogs/models/dog.model";

export class InMemoryDogsService extends InMemoryDbService {

  createDb(): { dogs: Dog[], dogDetails: DogDetails[] } {
    return {
      dogs: [
        {
          "id": "1",
          "name": "Azor",
          "breed": "Labrador",
          "guideName": "Jan Kowalski"
        },
        {
          "id": "2",
          "name": "Puszek",
          "breed": "Owczarek niemiecki",
          "guideName": "Jan Kowalski"
        }
      ],
      dogDetails: [
        {
          "id": "1",
          "name": "Azor",
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
      ]
    }
  }
}