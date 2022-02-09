import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParmsComponent } from './parms.component';

describe('ParmsComponent', () => {
  let component: ParmsComponent;
  let fixture: ComponentFixture<ParmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParmsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
