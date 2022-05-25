import { Component, OnInit } from '@angular/core';
import { TrainingOverview } from '../../models/training';

const tmp: TrainingOverview[] = [
  {
    id: "1",
    localization: "1",
    address: "1",
    date: new Date()
  },
  {
    id: "2",
    localization: "loc2",
    address: "address2",
    date: new Date()
  }
]

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.scss']
})
export class TrainingsComponent implements OnInit {

  trainingsData = tmp;

  constructor() { }

  ngOnInit(): void {
  }

}
