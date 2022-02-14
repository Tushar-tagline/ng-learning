import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datepipes',
  templateUrl: './datepipes.component.html',
  styleUrls: ['./datepipes.component.scss']
})
export class DatepipesComponent implements OnInit {
  public valuedate=new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
