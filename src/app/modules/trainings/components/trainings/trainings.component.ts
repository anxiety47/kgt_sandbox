import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TrainingOverview } from '../../models/training.model';
import { TrainingsApiService } from '../../services/trainings-api/trainings-api.service';


@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.scss']
})
export class TrainingsComponent implements OnInit {

  lat = 50.078418;
  lng = 20.009007;
  trainingsData!: TrainingOverview[];

  constructor(
    private trainingsApiService: TrainingsApiService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.trainingsApiService.getTrainings().subscribe((trainings: TrainingOverview[]) => {
      this.trainingsData = trainings;
    })
  }

  showDetails(id: string): void {
    this.router.navigate([id], { relativeTo: this.route });
  }
}
