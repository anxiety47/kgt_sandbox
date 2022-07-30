import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TrainingDetails, TrainingOverview } from '../../models/training.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { DogTraining } from '../../models/dogs.model';

@Injectable({
  providedIn: 'root'
})
export class TrainingsApiService {

  constructor(private http: HttpClient) { }

  getTrainings(): Observable<TrainingOverview[]> {
    return this.http.get<TrainingOverview[]>(environment.url + '/trainings');
  }

  getTrainingDetails(id: string): Observable<TrainingDetails> {
    return this.http.get<TrainingDetails>(environment.url + `/trainingDetails/${id}`)
  }
  
  getDogTrainingDetails(id: string): Observable<DogTraining> {
    return this.http.get<DogTraining>(environment.url + `/dogTrainingDetails/${id}`)

  }
}
