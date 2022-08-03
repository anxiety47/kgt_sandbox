import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {  DogTraining, TrackPoint } from '../../models/dogs.model';
import { TrainingsApiService } from '../../services/trainings-api/trainings-api.service';

@Component({
  selector: 'app-dog-training',
  templateUrl: './dog-training.component.html',
  styleUrls: ['./dog-training.component.scss']
})
export class DogTrainingComponent implements OnInit {

  lat = 50.01150369644165;
  lng = 19.82978582382202;

  dogTrainingId!: string | null;
  dogTrainingDetails!: DogTraining;
  form = this.formBuilder.group({
    trailData: this.formBuilder.group({
      lostPersonTrailLength: ['', Validators.required],
      lostPersonStartTime: [new Date()],
      delayTime: [''],
      
      dogTrailLength: [''],
      dogStartTime: [new Date()],
      duration: ['']
    }),
    weather: [''],
    groundType: [''],
    additionalData: this.formBuilder.group({
      lostPersonName: [''],
      notes: [''],
      // add files
    })

  })

  constructor(
    private route: ActivatedRoute,
    private trainingsApiService: TrainingsApiService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.dogTrainingId = this.route.snapshot.paramMap.get('id');
    if (!this.dogTrainingId) {
      // TODO: redirect to error page
    } else {
      this.trainingsApiService.getDogTrainingDetails(this.dogTrainingId).subscribe(dogTrainingDetails => {
        this.dogTrainingDetails = dogTrainingDetails;
        this.loadDataToForm();
      });
    }
  }

  onLineClick(event: any) {
    console.log(event.latLng.toString())
  }

  markerClicked(data: TrackPoint) {
    console.log('point data:', data)
  }

  private loadDataToForm(): void {
    this.form.patchValue({
      trailData: {
        lostPersonTrailLength: this.dogTrainingDetails.lostPersonTrackData.lostPersonTrailLength,
        lostPersonStartTime: new Date(this.dogTrainingDetails.lostPersonTrackData.lostPersonStartTime),
        delayTime: this.dogTrainingDetails.delayTime,
        
        dogTrailLength: this.dogTrainingDetails.dogTrackData.dogTrailLength,
        dogStartTime: new Date(this.dogTrainingDetails.dogTrackData.dogStartTime),
        duration: this.dogTrainingDetails.duration
      },
      weather: this.dogTrainingDetails.weather,
      groundType: this.dogTrainingDetails.groundType,
      additionalData: {
        lostPersonName: this.dogTrainingDetails.lostPersonTrackData.lostPersonName,
        notes: this.dogTrainingDetails.notes
      }
    })
  }

}
