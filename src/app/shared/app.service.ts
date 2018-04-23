import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class AppService {
  constructor() {}

  getPrevData(): Observable<Numbers> {
    return Observable.of(new Numbers(10, 20));
  }
}

export class Numbers {
    num1: number;
    num2: number;

    constructor(num1: number, num2: number) {
        this.num1 = num1;
        this.num2 = num2;
    }
}
