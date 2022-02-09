import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirstserviesService } from '../appservies/firstservies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  product="";
  constructor(private firstserviesServics:FirstserviesService,private router:Router) { }

  ngOnInit(): void {
    this.product=this.firstserviesServics.product;
  }

  btncall():void{
    this.firstserviesServics.messagealter();
  }
  showdata(){
    this.router.navigate(['/card1'])
    console.log(this.router.navigate(['/card1']));
    
  }
}
 