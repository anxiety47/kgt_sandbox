import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DogDetails } from '../../models/dog.model';
import { tmpDogDetails } from './tmp-data';

@Component({
  selector: 'app-dog-details',
  templateUrl: './dog-details.component.html',
  styleUrls: ['./dog-details.component.scss']
})
export class DogDetailsComponent implements OnInit {

  dogDetails: DogDetails = tmpDogDetails;
  dogId!: string | null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.dogId = this.route.snapshot.paramMap.get('id');
  }

}
