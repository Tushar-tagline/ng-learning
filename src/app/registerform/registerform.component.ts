import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.scss']
})
export class RegisterformComponent implements OnInit {
  public myreactive!: FormGroup;
  public states: string[] = ['Gujarat', 'Maharashtra', 'mp'];
  public genders: Array<any> = [
    {
      id: '1',
      value: 'male'
    },
    {
      id: '2',
      value: 'female'
    }
  ];

  public hobbys: Array<any> = [
    {
      id: '1',
      value: 'redding'
    },
    {
      id: '2',
      value: 'sports'
    },
    {
      id: '3',
      value: 'cricket'
    }
  ]

  constructor() {
   
  }
  // onCheckboxChange(e.target.checked) {
  //   const checkArray: FormArray = this.myreactive.get('checkArray') as FormArray;
  //   if (e.target.checked) {
  //     checkArray.push(new FormControl(e.target.value));
  //   } else {
  //     let i: number = 0;
  //     checkArray.controls.forEach((item: FormControl) => {
  //       if (item.value == e.target.value) {
  //         checkArray.removeAt(i);


  //         return;
  //       }
  //       i++;
  //     });
  //   }
  // }

  ngOnInit(): void {
    this.myreactive = new FormGroup({
      'fname': new FormControl(null, Validators.required),
      'lname': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'address': new FormControl(null, Validators.required),
      'gender': new FormControl(null, Validators.required),
      'myCheckbox1': new FormControl(null, Validators.required),
      'state': new FormControl(null, Validators.required),
      'city': new FormControl(null, Validators.required)
    });

  }


  onsumbit() {
    console.log(this.myreactive);
  }
  get user() {
    return this.myreactive.get('fname')
  }
  get lname() {
    return this.myreactive.get('lname')
  }
  get email() {
    return this.myreactive.get('email')
  }
  get address() {
    return this.myreactive.get('address')
  }
  get gender() {
    return this.myreactive.get('gender')
  }
  get hobby() {
    return this.myreactive.get('myCheckbox1')
  }
  get state() {
    return this.myreactive.get('state')
  }
  get city() {
    return this.myreactive.get('city')
  }
} 
