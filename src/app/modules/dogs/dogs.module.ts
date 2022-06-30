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
import {DividerModule} from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    ButtonModule,
    DividerModule,
    InputTextModule,
    InputTextareaModule,
    CalendarModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DogsModule { }
