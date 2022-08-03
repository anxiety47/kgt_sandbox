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
                "latitude": 50.01148223876953,
                "longitude": 19.82978582382202,
                "time": new Date()
              },
              {
                "latitude": 50.01150369644165,
                "longitude": 19.82980728149414,
                "time": new Date()
              },
              {
                "latitude": 50.01150369644165,
                "longitude": 19.82978582382202,
                "time": new Date()
              },
              {
                "latitude": 50.01148223876953,
                "longitude": 19.829742908477783,
                "time": new Date()
              },
              {
                "latitude": 50.01148223876953,
                "longitude": 19.829742908477783,
                "time": new Date()
              },
              {
                "latitude": 50.01148223876953,
                "longitude": 19.829678535461426,
                "time": new Date()
              },
              {
                "latitude": 50.01146078109741,
                "longitude": 19.829657077789307,
                "time": new Date()
              },
              {
                "latitude": 50.01146078109741,
                "longitude": 19.829635620117188,
                "time": new Date()
              },
              {
                "latitude": 50.01146078109741,
                "longitude": 19.82961416244507,
                "time": new Date()
              },
              {
                "latitude": 50.01146078109741,
                "longitude": 19.82957124710083,
                "time": new Date()
              },
              {
                "latitude": 50.01146078109741,
                "longitude": 19.82957124710083,
                "time": new Date()
              },
              {
                "latitude": 50.01146078109741,
                "longitude": 19.82957124710083,
                "time": new Date()
              },
              {
                "latitude": 50.01146078109741,
                "longitude": 19.82957124710083,
                "time": new Date()
              }
            ],
            "dogTrailLength": "700m",
            "dogStartTime": new Date(2022, 11, 20, 13, 14),
          },
          "lostPersonTrackData": {
            "lostPersonName": 'Jan Kowalski',
            "lostPersonTrackPoints": [
              {
                "latitude": 50.22,
                "longitude": 20.20,
                "time": new Date()
              },
              {
                "latitude": 50.22,
                "longitude": 20.21,
                "time": new Date()
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