import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { AppService, Numbers } from './shared/app.service';
import { CalcComponent } from './calc/calc.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  private num1: number;
  private num2: number;
  private subscribers: any;

  @ViewChild(CalcComponent) calc: CalcComponent;

  constructor(private appService: AppService) {
  }

  ngOnInit() {
    this.subscribers = this.appService.getPrevData().subscribe((nums: Numbers) => {
      this.num1 = nums.num1;
      this.num2 = nums.num2;
      this.calc.calculateResult(nums.num1, nums.num2);
    });
  }

  ngOnDestroy() {
    this.subscribers.unsubscribe();
  }
}
