import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Personaje } from '../interfaces/personajes.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})

export class MainPageComponent {
  //este es el padre donde se crean el arreglo con los personajes que recibira el hijo
  // en el constructor se esta inyectando el servicio dbz creado

  constructor(private dbzService: DbzService){}

  get personaje():Personaje[]{
    return [...this.dbzService.personajes];
  }

  onDeletePersonaje(id:string):void{
  this.dbzService.deletePersonajeById(id);
  }

  onNewPersonaje(personaje:Personaje):void{
    this.dbzService.onNuevoPersonajeMain(personaje);
  }

}
