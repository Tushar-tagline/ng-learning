import { Component, OnInit, ViewChild } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.scss'],
})
export class LoginformComponent implements OnInit {
  @ViewChild('form') form!: NgForm;
  public showdata: boolean = false;
  public email: any;
  public password: any;
  public user = { email: '', password: '' };
  
  constructor() {}

  ngOnInit(): void {}
  onsumbit() {
    // console.log('forms sumbit', this.form);
    //const {email,password}=this.form.value
    this.user.email = this.form.value.email;
    this.user.password = this.form.value.password;
    this.onReset();
    this.showdata = true;
  }
  onReset() {
    this.form.reset();
  }
}
