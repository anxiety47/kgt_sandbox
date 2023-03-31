import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { DogDetails } from '../../../models/dog.model';
import { Guide } from 'src/app/modules/dogs/models/guide.model';
import { DogsApiService } from '../../../services/dogs-api/dogs-api.service';
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
    breed: [],
    dateOfBirth: [],
    notes: []
  });

  guides!: Guide[];

  constructor(private formBuilder: UntypedFormBuilder, private dogsApiService: DogsApiService) {}

  ngOnInit(): void {
    this.editDogForm.patchValue({
      guide: this.data.guideName, 
      breed: this.data.breed,
      dateOfBirth: new Date(this.data.dateOfBirth),
      notes: this.data.notes 
    });

    this.dogsApiService.getGuides().subscribe( guides => {
      this.guides = guides;
    })
  }

  editData(): void {
    this.isDataReadonly = false;
    // TODO implementation
  }
  
  saveData(): void {
    this.isDataReadonly = true;
    // TODO implementation
  }
  
  changePhoto(): void {
    console.log('change photo')
    // TODO implementation
  }
}
