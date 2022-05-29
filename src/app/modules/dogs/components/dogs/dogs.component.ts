import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Dog } from '../models/dog.model';

const tmpDogs: Dog[] = [
  {
    id: '1',
    name: 'Azor',
    breed: 'Labrador',
    guideName: 'Jan Kowalski'
  },
  {
    id: '2',
    name: 'Reks',
    breed: 'Owczarek niemiecki',
    guideName: 'Jan Kowalski'
  }
]

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss']
})
export class DogsComponent implements OnInit {

  dogs = tmpDogs;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  showDetails(id: string): void {
    this.router.navigate([id], { relativeTo: this.route });
  }
}
