import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DogDetails } from '../../../models/dog.model';

@Component({
  selector: 'app-dog-data',
  templateUrl: './dog-data.component.html',
  styleUrls: ['./dog-data.component.scss']
})
export class DogDataComponent implements OnInit {

  @Input() public data!: DogDetails;
  isDataReadonly: boolean = true;
  editDogForm = this.formBuilder.group({
    guide: [],
    breed: ['test'],
    dateOfBirth: [],
    level: [],
    notes: []
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.editDogForm.patchValue({
      // TODO: get data from backend and set dropdown options, set values in form
      // guide 
      // level
      breed: this.data.breed,
      dateOfBirth: new Date(this.data.dateOfBirth),
      notes: this.data.notes 
    });
  }

  editData(): void {
    console.log('edit');
    this.isDataReadonly = false;
  }

  saveData(): void {
    this.isDataReadonly = true;
  }
}
