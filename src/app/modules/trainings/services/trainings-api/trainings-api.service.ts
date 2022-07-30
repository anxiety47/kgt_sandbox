import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TrainingOverview } from '../../models/training';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainingsApiService {

  constructor(private http: HttpClient) { }

  getTrainings(): Observable<TrainingOverview[]> {
    return this.http.get<TrainingOverview[]>(environment.url + '/trainings');
  }
}
