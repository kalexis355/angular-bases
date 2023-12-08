import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3>Counter: {{counter}}</h3>
  <button (click)="incrementarDisminuir(1)">Aumentar</button>
  <button (click)="reset()" >Reset</button>
  <button (click)="incrementarDisminuir(-1)" >Disminuir</button>
  `
})

export class CounterComponent {
  public counter:number =  10;

  incrementarDisminuir(value:number):void{
    this.counter += value
  }

  reset(){
    this.counter=10;
  }

}
