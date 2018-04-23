import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent {
  @Input() num1: number;
  @Input() num2: number;

  private result: number;

  public calculateResult(num1: number, num2: number) {
    this.result = num1 * num2;
  }
}
