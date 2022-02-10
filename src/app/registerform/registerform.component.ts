import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.scss']
})
export class RegisterformComponent implements OnInit {
  public myreactive!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.myreactive = new FormGroup({
      'fname': new FormControl(null),
      'lname': new FormControl(null),
      'email': new FormControl(null),
      'address': new FormControl(null),
      'gender': new FormControl('      '),
      'state': new FormControl(''),
      'city': new FormControl('')
    });
  }
  onsumbit(){
    console.log(this.myreactive);
  }

} 
