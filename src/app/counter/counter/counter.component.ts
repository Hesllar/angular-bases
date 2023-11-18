import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h1>Hola Counter</h1>
    <h3>Counter:{{counter}}</h3>

    <button (click)="increment(1)">+1</button>
    <button (click)="resetCounter()">reset</button>
    <button (click)="decrement(1)">-1</button>
  `
})

export class CounterComponent {

  public counter:number = 10;

  increment(values:number):void{
    this.counter +=values;
  }

  resetCounter(){
    this.counter = 10;
  }

  decrement(values:number):void{

    this.counter -=values;
  }
}
