import { Component, OnInit } from '@angular/core';
import { FirstserviesService } from 'src/app/appservies/firstservies.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  product=""
  constructor(private firstserviesService:FirstserviesService) { }
  
  ngOnInit(): void {
    this.product=this.firstserviesService.product
  }
  btncall(){
    this.firstserviesService.messagealter();
  }


}
