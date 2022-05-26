import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TrainingsModule } from './modules/trainings/trainings.module';
import { DogsModule } from './modules/dogs/dogs.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    TrainingsModule,
    DogsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
