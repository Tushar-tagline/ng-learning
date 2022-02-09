import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-parms',
  templateUrl: './parms.component.html',
  styleUrls: ['./parms.component.scss']
})
export class ParmsComponent implements OnInit {
  //par:{id:number,name:string};
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
     // this.par={id:this.route.snapshot.params['id'],
     // name:this.route.snapshot.params['name'] 
    }
  }


