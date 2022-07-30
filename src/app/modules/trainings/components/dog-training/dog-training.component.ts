import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DogTraining } from '../../models/dogs.model';
import { TrainingsApiService } from '../../services/trainings-api/trainings-api.service';

@Component({
  selector: 'app-dog-training',
  templateUrl: './dog-training.component.html',
  styleUrls: ['./dog-training.component.scss']
})
export class DogTrainingComponent implements OnInit {

  lat = 50.078418;
  lng = 20.009007;

  dogTrainingId!: string | null;
  dogTrainingDetails!: DogTraining;

  constructor(
    private route: ActivatedRoute,
    private trainingsApiService: TrainingsApiService
  ) { }

  ngOnInit(): void {
    this.dogTrainingId = this.route.snapshot.paramMap.get('id');
    if (!this.dogTrainingId) {
      // TODO: redirect to error page
    } else {
      this.trainingsApiService.getDogTrainingDetails(this.dogTrainingId).subscribe(dogTrainingDetails => {
        this.dogTrainingDetails = dogTrainingDetails;
      });
    }
  }

}
