import { Component, Input, OnInit } from '@angular/core';
import { Training } from '../../../models/training.model';

@Component({
  selector: 'app-dog-trainings-list',
  templateUrl: './dog-trainings-list.component.html',
  styleUrls: ['./dog-trainings-list.component.scss']
})
export class DogTrainingsListComponent implements OnInit {

  @Input() trainingsList!: Training[];

  constructor() { }

  ngOnInit(): void {
  }

}
