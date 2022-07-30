import { InMemoryDbService } from "angular-in-memory-web-api";
import { TrainingDetails, TrainingOverview } from "src/app/modules/trainings/models/training";

export class InMemoryTrainingsService extends InMemoryDbService {

  createDb(): { trainings: TrainingOverview[], trainingDetails: TrainingDetails[] } {
    return {
      trainings:  [
        {
          id: "1",
          localization: "localization 1 - long long long long name",
          address: "address 1 longlonglonglongname",
          date: new Date(2022, 11, 20)
        },
        {
          id: "2",
          localization: "localization 2",
          address: "address 2",
          date: new Date()
        },
        {
          id: "1",
          localization: "localization 1 - long long long long name",
          address: "address 1 longlonglonglongname",
          date: new Date(2022, 11, 20)
        },
        {
          id: "2",
          localization: "localization 2",
          address: "address 2",
          date: new Date()
        },
        {
          id: "1",
          localization: "localization 1 - long long long long name",
          address: "address 1 longlonglonglongname",
          date: new Date(2022, 11, 20)
        },
        {
          id: "2",
          localization: "localization 2",
          address: "address 2",
          date: new Date()
        },
        {
          id: "1",
          localization: "localization 1 - long long long long name",
          address: "address 1 longlonglonglongname",
          date: new Date(2022, 11, 20)
        },
        {
          id: "2",
          localization: "localization 2",
          address: "address 2",
          date: new Date()
        },
        {
          id: "1",
          localization: "localization 1 - long long long long name",
          address: "address 1 longlonglonglongname",
          date: new Date(2022, 11, 20)
        },
        {
          id: "2",
          localization: "localization 2",
          address: "address 2",
          date: new Date()
        },
      ],
      trainingDetails: [
        {
          "id": "1",
          "localization": "lokalizacja 1",
          "address": "adres 1",
          "date": new Date(2022, 11, 20),
          "notes": "uwagi",
          "weather": "pogoda"
        },
        {
          "id": "2",
          "localization": "lokalizacja 2",
          "address": "adres 2",
          "date": new Date(),
          "notes": "uwagi",
          "weather": "pogoda"
        }
      ]
    }
  }
}