import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingsComponent } from './components/trainings/trainings.component';
import { ButtonModule } from 'primeng/button';
import { environment } from 'src/environments/environment';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryTrainingsService } from 'src/backend-mock/in-memory-trainings.service';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    TrainingsComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: ''
    }),
    CommonModule,
    ButtonModule,
    HttpClientModule,
    TableModule,
    environment.production ?
    [] : HttpClientInMemoryWebApiModule.forRoot(InMemoryTrainingsService)
  ]
})
export class TrainingsModule { }
