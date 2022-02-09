import { Component, OnDestroy, OnInit } from '@angular/core';
import { count, interval, Observable, observable, Subscription } from 'rxjs';
import { FirstserviesService } from '../appservies/firstservies.service';

@Component({
  selector: 'app-card1',
  templateUrl: './card1.component.html',
  styleUrls: ['./card1.component.scss'],
})
export class Card1Component implements OnInit, OnDestroy {
  public product = '';
  public subcription: Subscription;
  public observeable: any;

  constructor(private firstserviesService: FirstserviesService) {
    this.subcription = interval(1000).subscribe((count) => {
      console.log(count);
      this.observeable = Observable.create((observer: any) => {
        let count = 0;
        setInterval(() => {
          observer.next(count);
          count++;
          if (count > 3) {
            observer.error(new Error('count is 3'));
          }
        }, 1000);
      });
    });
  }
  ngOnInit(): void {
    this.product = this.firstserviesService.product;
    this.observeable.subscribe((count: number) => {
      console.log(count);
      // (error) => {
      //   console.log('error is hear');
      // };
    });
  }

  btncall(): void {
    this.firstserviesService.messagealter();
  }

  ngOnDestroy(): void {
    this.subcription.unsubscribe();
  }
}
