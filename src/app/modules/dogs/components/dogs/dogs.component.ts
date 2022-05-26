import { Component, OnInit } from '@angular/core';

interface Dog {
  id: string;
  name: string;
  bread: string;
  guideName: string;
}

const tmpDogs: Dog[] = [
  {
    id: '1',
    name: 'Azor',
    bread: 'Labrador',
    guideName: 'Jan Kowalski'
  },
  {
    id: '2',
    name: 'Reks',
    bread: 'Owczarek niemiecki',
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

  constructor() { }

  ngOnInit(): void {
  }

}
