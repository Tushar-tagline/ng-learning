import { Component, OnInit } from '@angular/core';
import { FirstserviesService } from '../appservies/firstservies.service';

@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.scss']
})
export class Card2Component implements OnInit {
  product="";
  constructor(private firstserviesServics:FirstserviesService) { }

  ngOnInit(): void {
    this.product=this.firstserviesServics.product
  }
  btncall(){
    this.firstserviesServics.messagealter();
  }
}
