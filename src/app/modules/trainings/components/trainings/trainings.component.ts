import { Component, OnInit } from '@angular/core';
import { TrainingOverview } from '../../models/training';
import { TrainingsApiService } from '../../services/trainings-api/trainings-api.service';


@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.scss']
})
export class TrainingsComponent implements OnInit {

  trainingsData!: TrainingOverview[];

  constructor(private trainingsApiService: TrainingsApiService) { }

  ngOnInit(): void {
    this.trainingsApiService.getTrainings().subscribe((trainings: TrainingOverview[]) => {
      this.trainingsData = trainings;
    })
  }

  showTraining(): void {
    console.log('show training')
  }

}
