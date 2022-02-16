import { Component, OnInit } from '@angular/core';
import { RequesthttpService } from './requesthttp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'pratice';
  public products: any = [];
  constructor(private httpsservies: RequesthttpService) { }
  ngOnInit() {
    //console.log(this.products);
    this.httpsservies.product().subscribe((data) => { console.log(data) });

  }
  userdata(data: any) {
    //console.log(data)
    this.httpsservies.postuser(data).subscribe((result) => {
      //this.products=result
      console.log(result)
    })
  }
  deletedata() {
    this.httpsservies.deleteuser(11).subscribe((datadelete) => {
      //this.products=datadelete
      console.log(datadelete)
    })
  }
}

