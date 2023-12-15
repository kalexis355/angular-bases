import { Component, EventEmitter, Output } from '@angular/core';
import { Personaje } from '../../interfaces/personajes.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

    // se usa el decorador output para
    @Output()
    //se crea una propiedad para poder crear un nuevo personaje
    //a traves de la clase EvenEmitter la cual se usa para emitir eventos
    public onNewPersonaje: EventEmitter<Personaje> = new EventEmitter();

  public personaje :Personaje = {
    name: '',
    power: 0
  }

  emitirPersonaje():void{
    //sirve para parar el codigo en un cierto punto
    // debugger;

    //se crea una copia superficial del personaje
    const personajeParaEmitir = { ...this.personaje };

    if(this.personaje.name.length===0) return;
    // se requiere limpiar los datos del personaje despues de hacer una copia
    this.personaje.name = ''
    this.personaje.power=0
    //Utilizamos la propiedad que tiene el evento para emitirla al main page con la funcion emit()
    this.onNewPersonaje.emit(personajeParaEmitir)
  }
}
