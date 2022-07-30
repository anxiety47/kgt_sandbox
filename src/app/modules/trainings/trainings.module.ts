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
import { TrainingDetailsComponent } from './components/training-details/training-details.component';
import { TrainingsRoutingModule } from './trainings-routing.module';
import { TrainingsApiService } from './services/trainings-api/trainings-api.service';
import { DividerModule } from 'primeng/divider';
import { DogTrainingComponent } from './components/dog-training/dog-training.component';
import { TabViewModule } from 'primeng/tabview';

@NgModule({
  declarations: [
    TrainingsComponent,
    TrainingDetailsComponent,
    DogTrainingComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: ''
    }),
    CommonModule,
    ButtonModule,
    HttpClientModule,
    TrainingsRoutingModule,
    TableModule,
    DividerModule,
    TabViewModule,
    environment.production ?
    [] : HttpClientInMemoryWebApiModule.forRoot(InMemoryTrainingsService)
  ],
  providers: [
    TrainingsApiService
  ]
})
export class TrainingsModule { }
