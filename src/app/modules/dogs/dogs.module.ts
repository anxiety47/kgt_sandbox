import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogsComponent } from './components/dogs/dogs.component';
import { DogsRoutingModule } from './dogs-routing.module';
import { DogDetailsComponent } from './components/dog-details/dog-details.component';

@NgModule({
  declarations: [
    DogsComponent,
    DogDetailsComponent
  ],
  imports: [
    CommonModule,
    DogsRoutingModule
  ]
})
export class DogsModule { }
