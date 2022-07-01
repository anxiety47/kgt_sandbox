import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Dog, DogDetails } from '../../models/dog.model';

@Injectable({
  providedIn: 'root'
})
export class DogsApiService {

  constructor(private http: HttpClient) { }

  getDogs(): Observable<Dog[]> {
    return this.http.get<Dog[]>(environment.url + '/dogs');
  }

  getDogDetails(id: string): Observable<DogDetails> {
    return this.http.get<DogDetails>(environment.url + `/dogDetails/${id}`);
  }
}
