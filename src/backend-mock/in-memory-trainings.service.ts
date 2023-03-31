import { InMemoryDbService } from "angular-in-memory-web-api";
import { DogTraining } from "src/app/modules/trainings/models/dogs.model";
import { TrainingDetails, TrainingOverview } from "src/app/modules/trainings/models/training.model";

export class InMemoryTrainingsService extends InMemoryDbService {

  createDb(): { trainings: TrainingOverview[], trainingDetails: TrainingDetails[], dogTrainingDetails: DogTraining[] } {
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
          "weather": "pogoda",
          "dogTrainings": [
            {
              "dogTrainingId": "1",
              "dogName": "Reks",
              "startTime": new Date()
            },
            {
              "dogTrainingId": "2",
              "dogName": "Azor",
              "startTime": new Date()
            }
          ]
        },
        {
          "id": "2",
          "localization": "lokalizacja 2",
          "address": "adres 2",
          "date": new Date(),
          "notes": "uwagi",
          "weather": "pogoda",
          "dogTrainings": [
            {
              "dogTrainingId": "1",
              "dogName": "Reks",
              "startTime": new Date()
            },
            {
              "dogTrainingId": "2",
              "dogName": "Azor",
              "startTime": new Date()
            }
          ]
        }
      ],
      dogTrainingDetails: [
        {
          "id": "1",
          "delayTime": "30 min",
          "duration": "1h",
          "weather": "Pogoda",
          "notes": "notatki",
          "groundType": "podłoże",
          "dogTrackData": {
            "dogTrackPoints": [
              {
                "latitude": 50.01146223876953,
                "longitude": 19.82978582382202,
                "time": new Date(2022, 11, 20, 11, 20)
              },
              {
                "latitude": 50.01148223876953,
                "longitude": 19.82978582382202,
                "time": new Date(2022, 11, 20, 11, 21)
              },
              {
                "latitude": 50.01150369644165,
                "longitude": 19.82980728149414,
                "time": new Date(2022, 11, 20, 11, 22)
              },
              {
                "latitude": 50.01150369644165,
                "longitude": 19.82978582382202,
                "time": new Date(2022, 11, 20, 11, 23)
              },
              {
                "latitude": 50.01148223876953,
                "longitude": 19.829742908477783,
                "time": new Date(2022, 11, 20, 11, 24)
              },
              {
                "latitude": 50.01148223876953,
                "longitude": 19.829742908477783,
                "time": new Date(2022, 11, 20, 11, 25)
              },
              {
                "latitude": 50.01148223876953,
                "longitude": 19.829678535461426,
                "time": new Date(2022, 11, 20, 11, 26)
              },
              {
                "latitude": 50.01146078109741,
                "longitude": 19.829657077789307,
                "time": new Date(2022, 11, 20, 11, 27)
              },
              {
                "latitude": 50.01146078109741,
                "longitude": 19.829635620117188,
                "time": new Date(2022, 11, 20, 11, 28)
              },
              {
                "latitude": 50.01146078109741,
                "longitude": 19.82961416244507,
                "time": new Date(2022, 11, 20, 11, 29)
              },
              {
                "latitude": 50.01146078109741,
                "longitude": 19.82957124710083,
                "time": new Date(2022, 11, 20, 11, 30)
              },
              {
                "latitude": 50.01146078109741,
                "longitude": 19.82957124710083,
                "time": new Date(2022, 11, 20, 11, 31)
              },
              {
                "latitude": 50.01146078109741,
                "longitude": 19.82957124710083,
                "time": new Date(2022, 11, 20, 11, 32)
              },
              {
                "latitude": 50.01146078109741,
                "longitude": 19.82957124710083,
                "time": new Date(2022, 11, 20, 11, 33)
              }
            ],
            "dogTrailLength": "700m",
            "dogStartTime": new Date(2022, 11, 20, 13, 14),
          },
          "lostPersonTrackData": {
            "lostPersonName": 'Jan Kowalski',
            "lostPersonTrackPoints": [
              {
                "latitude": 50.22000000000001,
                "longitude": 20.20100000000001,
                "time": new Date(2022, 11, 20, 11, 34)
              },
              {
                "latitude": 50.22000000000123,
                "longitude": 20.21000000000231,
                "time": new Date(2022, 11, 20, 11, 35)
              },
              {
                "latitude": 50.22000000000432,
                "longitude": 20.22000000000543,
                "time": new Date(2022, 11, 20, 11, 36)
              },
              {
                "latitude": 50.22000000000843,
                "longitude": 20.23000000000842,
                "time": new Date(2022, 11, 20, 11, 37)
              }
            ],
            "lostPersonTrailLength": "500m",
            "lostPersonStartTime": new Date(2022, 11, 20, 13, 14),
          },

        },
      ]
    }
  }
}