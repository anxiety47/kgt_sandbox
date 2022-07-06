import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogTrainingsListComponent } from './dog-trainings-list.component';

describe('DogTrainingsListComponent', () => {
  let component: DogTrainingsListComponent;
  let fixture: ComponentFixture<DogTrainingsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogTrainingsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DogTrainingsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
