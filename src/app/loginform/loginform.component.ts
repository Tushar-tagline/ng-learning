import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.scss']
})
export class LoginformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onsumbit(form:NgForm){
    console.log("forms sumbit",form)
  }

}
