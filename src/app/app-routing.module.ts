import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainingsComponent } from './modules/trainings/components/trainings/trainings.component';

const routes: Routes = [
  // TODO: use lazy loading for modules
  { path: 'trainings', component: TrainingsComponent },
  { path: 'dogs', loadChildren: () => import('./modules/dogs/dogs.module').then(m => m.DogsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
