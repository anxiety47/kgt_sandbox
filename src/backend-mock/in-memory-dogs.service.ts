import { InMemoryDbService } from "angular-in-memory-web-api";
import { Dog, DogDetails, DogLevel } from "src/app/modules/dogs/models/dog.model";
import { Guide } from "src/app/modules/dogs/models/guide.model";

export class InMemoryDogsService extends InMemoryDbService {

  createDb(): { dogs: Dog[], dogDetails: DogDetails[], guides: Guide[] } {
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
          "dateOfBirth": new Date(2022, 11, 20),
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
            },
            {
              "id": "21",
              "date": new Date(),
              "location": "Lokalizacja 2",
              "trailLength": 500,
              "timeOfDelay": "30 min"
            },
            {
              "id": "21",
              "date": new Date(),
              "location": "Lokalizacja 2",
              "trailLength": 500,
              "timeOfDelay": "30 min"
            },
            {
              "id": "21",
              "date": new Date(),
              "location": "Lokalizacja 2",
              "trailLength": 500,
              "timeOfDelay": "30 min"
            },
            {
              "id": "21",
              "date": new Date(),
              "location": "Lokalizacja 2",
              "trailLength": 500,
              "timeOfDelay": "30 min"
            },
            {
              "id": "21",
              "date": new Date(),
              "location": "Lokalizacja 2",
              "trailLength": 500,
              "timeOfDelay": "30 min"
            },
            {
              "id": "21",
              "date": new Date(),
              "location": "Lokalizacja 2",
              "trailLength": 500,
              "timeOfDelay": "30 min"
            },
            {
              "id": "21",
              "date": new Date(),
              "location": "Lokalizacja 2",
              "trailLength": 500,
              "timeOfDelay": "30 min"
            },
            {
              "id": "21",
              "date": new Date(),
              "location": "Lokalizacja 2",
              "trailLength": 500,
              "timeOfDelay": "30 min"
            },
            {
              "id": "21",
              "date": new Date(),
              "location": "Lokalizacja 2",
              "trailLength": 500,
              "timeOfDelay": "30 min"
            },
            {
              "id": "21",
              "date": new Date(),
              "location": "Lokalizacja 2",
              "trailLength": 500,
              "timeOfDelay": "30 min"
            },
            {
              "id": "21",
              "date": new Date(),
              "location": "Lokalizacja 2",
              "trailLength": 500,
              "timeOfDelay": "30 min"
            }
          ]
        }
      ],
      guides: [
        {id: '1', name: 'Jan Kowalski'},
        {id: '2', name: 'Anna Nowak'},
        {id: '3', name: 'Marek Ziemniak'}
      ]
    }
  }
}