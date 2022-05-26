import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DogsComponent } from './modules/dogs/components/dogs/dogs.component';
import { TrainingsComponent } from './modules/trainings/components/trainings/trainings.component';

const routes: Routes = [
  // TODO: use lazy loading for modules
  { path: 'trainings', component: TrainingsComponent },
  { path: 'dogs', component: DogsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
