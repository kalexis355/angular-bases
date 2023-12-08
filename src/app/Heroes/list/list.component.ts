import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  //para utilizar el ngfor se utiliza un arreglo para poder duplicar el elemento li con cada valor del arreglo
  public heroNames: string[]=['Spiderman','IronMan','Hulk','She Hulk','Thor']
  public heroeBorrado?: string = '';

  borrarUltimoHeroe():void{
   this.heroeBorrado =  this.heroNames.pop();

  }

}
