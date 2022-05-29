import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogsComponent } from './components/dogs/dogs.component';
import { DogsRoutingModule } from './dogs-routing.module';
import { DogDetailsComponent } from './components/dog-details/dog-details.component';
import { TabViewModule } from 'primeng/tabview';
import { TableModule } from 'primeng/table';
import { DogDataComponent } from './components/dog-details/dog-data/dog-data.component';
import { DogTrainingsListComponent } from './components/dog-details/dog-trainings-list/dog-trainings-list.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    DogsComponent,
    DogDetailsComponent,
    DogDataComponent,
    DogTrainingsListComponent
  ],
  imports: [
    CommonModule,
    DogsRoutingModule,
    TabViewModule,
    TableModule,
    ButtonModule
  ]
})
export class DogsModule { }
