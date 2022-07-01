import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DogDetails } from '../../models/dog.model';
import { DogsApiService } from '../../services/dogs-api/dogs-api.service';

@Component({
  selector: 'app-dog-details',
  templateUrl: './dog-details.component.html',
  styleUrls: ['./dog-details.component.scss']
})
export class DogDetailsComponent implements OnInit {

  dogDetails!: DogDetails;
  dogId!: string | null;

  constructor(
    private route: ActivatedRoute,
    private dogsApiService: DogsApiService
    ) { }

  ngOnInit(): void {
    this.dogId = this.route.snapshot.paramMap.get('id');
    if (!this.dogId) {
      // TODO: redirect to error page
    } else {
      this.dogsApiService.getDogDetails(this.dogId).subscribe(dogDetails => {
        this.dogDetails = dogDetails;
      });
    }
  }

}
