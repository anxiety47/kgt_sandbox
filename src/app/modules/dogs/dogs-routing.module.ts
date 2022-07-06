import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DogDetailsComponent } from './components/dog-details/dog-details.component';
import { DogsComponent } from './components/dogs/dogs.component';

const routes: Routes = [
  { path: '', component: DogsComponent },
  { path: ':id', component: DogDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DogsRoutingModule { }
