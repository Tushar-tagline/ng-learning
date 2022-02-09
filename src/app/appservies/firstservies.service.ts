import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirstserviesService {
  product="mobile"

  
  constructor() { }

  messagealter(){
    alert("hii this is call");
  }
}
