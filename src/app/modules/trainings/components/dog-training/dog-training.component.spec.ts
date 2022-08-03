import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogTrainingComponent } from './dog-training.component';

describe('DogTrainingComponent', () => {
  let component: DogTrainingComponent;
  let fixture: ComponentFixture<DogTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogTrainingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DogTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
