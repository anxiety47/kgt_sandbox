import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DogTraining, TrackPoint } from '../../models/dogs.model';
import { TrainingsApiService } from '../../services/trainings-api/trainings-api.service';

@Component({
  selector: 'app-dog-training',
  templateUrl: './dog-training.component.html',
  styleUrls: ['./dog-training.component.scss']
})
export class DogTrainingComponent implements OnInit {

  // tmp solution
  icon = "../../../../../assets/images/dot10px.svg";

  lat = 50.01150369644165;
  lng = 19.82978582382202;

  currentDogTrail!: TrackPoint[];
  currentPersonTrail!: TrackPoint[];
  // todo: add lost person trail

  dogTrainingId!: string | null;
  dogTrainingDetails!: DogTraining;
  form = this.formBuilder.group({
    trailData: this.formBuilder.group({
      lostPersonTrailLength: ['', Validators.required],
      lostPersonStartTime: [new Date(), Validators.required],
      delayTime: ['', Validators.required],
      
      dogTrailLength: ['', Validators.required],
      dogStartTime: [new Date(), Validators.required],
      duration: ['', Validators.required]
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

  // TODO: to be removed?
  onLineClick(event: any) {
    console.log(event.latLng.toString())
  }

  setAsDogTrailStart(startPoint: TrackPoint): void {
    this.currentDogTrail = this.currentDogTrail.filter(
      point => new Date(startPoint.time) <= new Date(point.time)
    );
  }
  
  setAsTrailEnd(endPoint: TrackPoint): void {
    this.currentDogTrail = this.currentDogTrail.filter(
      point => new Date(point.time) <= new Date(endPoint.time)
    );
  }

  save(): void {

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
    });

    this.currentDogTrail = this.dogTrainingDetails.dogTrackData.dogTrackPoints;
    this.currentPersonTrail = this.dogTrainingDetails.lostPersonTrackData.lostPersonTrackPoints;
  }

}
