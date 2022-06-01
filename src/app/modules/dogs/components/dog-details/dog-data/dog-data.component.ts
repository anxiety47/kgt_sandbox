import { Component, Input, OnInit } from '@angular/core';
import { DogDetails } from '../../../models/dog.model';

@Component({
  selector: 'app-dog-data',
  templateUrl: './dog-data.component.html',
  styleUrls: ['./dog-data.component.scss']
})
export class DogDataComponent implements OnInit {

  @Input() public data!: DogDetails;
  constructor() { }

  ngOnInit(): void {
  }

}
