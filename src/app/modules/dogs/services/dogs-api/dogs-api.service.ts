import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Dog } from '../../models/dog.model';

@Injectable({
  providedIn: 'root'
})
export class DogsApiService {

  constructor(private http: HttpClient) { }

  getDogs(): Observable<Dog[]> {
    return this.http.get<Dog[]>(environment.url + '/dogs');
  }
}
