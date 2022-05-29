import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogsComponent } from './components/dogs/dogs.component';
import { DogsRoutingModule } from './dogs-routing.module';

@NgModule({
  declarations: [
    DogsComponent
  ],
  imports: [
    CommonModule,
    DogsRoutingModule
  ]
})
export class DogsModule { }
