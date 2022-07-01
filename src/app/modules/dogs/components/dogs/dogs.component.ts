import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Dog } from '../../models/dog.model';
import { DogsApiService } from '../../services/dogs-api/dogs-api.service';


@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss']
})
export class DogsComponent implements OnInit {

  dogs!: Dog[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dogsApiService: DogsApiService) { }

  ngOnInit(): void {
    this.dogsApiService.getDogs().subscribe(dogs => {
      this.dogs = dogs;
    })
  }

  showDetails(id: string): void {
    this.router.navigate([id], { relativeTo: this.route });
  }
}
