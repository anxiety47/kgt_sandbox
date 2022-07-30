import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DogTrainingComponent } from './components/dog-training/dog-training.component';
import { TrainingDetailsComponent } from './components/training-details/training-details.component';
import { TrainingsComponent } from './components/trainings/trainings.component';

const routes: Routes = [
  { path: '', component: TrainingsComponent },
  { path: ':id', component: TrainingDetailsComponent },
  { path: ':id/dogTraining/:id', component: DogTrainingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingsRoutingModule { }
