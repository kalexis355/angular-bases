import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../../interfaces/personajes.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output()
  public onDelet: EventEmitter<string> = new EventEmitter();

  //este decorador sirve para comunicar al padre con el hijo
  @Input()
  // este valor de personajes es por defecto por si no se recibe datos del padre
  public personajeLista: Personaje[] = [{
    name: 'Trunks',
    power: 10,
    imagen: '../assets/imgDbz/caraTrunks.png'
  }]

  //emitir el index al presionar el boton
  // onDeletePersonaje(index:number):void{
  //   //TODO: Emitir el Id del personaje
  //   console.log(index);

  //   this.onDelet.emit(index);

  // }
  onDeletePersonaje(id:string):void{
    //TODO: Emitir el Id del personaje
    console.log(id);

    this.onDelet.emit(id);

  }
}
