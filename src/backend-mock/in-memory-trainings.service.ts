import { InMemoryDbService } from "angular-in-memory-web-api";
import { TrainingOverview } from "src/app/modules/trainings/models/training";

export class InMemoryTrainingsService extends InMemoryDbService {

  createDb(): { trainings: TrainingOverview[] } {
    return {
      trainings:  [
        {
          id: "1",
          localization: "localization 1",
          address: "address 1",
          date: new Date(2022, 11, 20)
        },
        {
          id: "2",
          localization: "localization 2",
          address: "address 2",
          date: new Date()
        }
      ]
    }
  }
}