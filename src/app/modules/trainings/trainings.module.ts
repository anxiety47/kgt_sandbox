import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingsComponent } from './components/trainings/trainings.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    TrainingsComponent
  ],
  imports: [
    CommonModule,
    ButtonModule
  ]
})
export class TrainingsModule { }
