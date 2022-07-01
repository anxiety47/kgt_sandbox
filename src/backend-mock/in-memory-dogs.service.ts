import { InMemoryDbService } from "angular-in-memory-web-api";
import { Dog } from "src/app/modules/dogs/models/dog.model";

export class InMemoryDogsService extends InMemoryDbService {

  createDb(): {dogs: Dog[] } {
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
      ]
    }
  }
}