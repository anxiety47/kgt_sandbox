import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainingsComponent } from './modules/trainings/components/trainings/trainings.component';

const routes: Routes = [
  { path: 'trainings', loadChildren: () => import('./modules/trainings/trainings.module').then(m => m.TrainingsModule) },
  { path: 'dogs', loadChildren: () => import('./modules/dogs/dogs.module').then(m => m.DogsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
