import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepipesComponent } from './datepipes.component';

describe('DatepipesComponent', () => {
  let component: DatepipesComponent;
  let fixture: ComponentFixture<DatepipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatepipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
