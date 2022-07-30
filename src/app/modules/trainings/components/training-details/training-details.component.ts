import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrainingDetails } from '../../models/training.model';
import { TrainingsApiService } from '../../services/trainings-api/trainings-api.service';

@Component({
  selector: 'app-training-details',
  templateUrl: './training-details.component.html',
  styleUrls: ['./training-details.component.scss']
})
export class TrainingDetailsComponent implements OnInit {

  trainingId!: string | null;
  trainingDetails!: TrainingDetails;

  constructor(
    private route: ActivatedRoute,
    private trainingsApiService: TrainingsApiService) { }

  ngOnInit(): void {
    this.trainingId = this.route.snapshot.paramMap.get('id');
    if (!this.trainingId) {
      // TODO: redirect to error page
    } else {
      this.trainingsApiService.getTrainingDetails(this.trainingId).subscribe(trainingDetails => {
        this.trainingDetails = trainingDetails;
      });
    }
  }

  showDogTraining(id: string):void {
    // TODO: redirect to dog training
  }

}
