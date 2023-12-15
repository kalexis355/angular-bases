//en este archivo estara toda la logica de nuestra aplicacion los datos las emisiones


import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/personajes.interface';

// se importa el modulo uuid para tener identificadores unicos
import { v4 as uuid} from 'uuid';



//este es un decorador que convierte una clase en un servicio
@Injectable({
  // con esta propiedad el servicio sera un singleton en toda la aplicacion solo una instancia
  providedIn: 'root'
})
export class DbzService {

  public personajes: Personaje[] = [{
    id: uuid(),
    name:'Krilin',
    power: 1000,
    imagen: '../assets/imgDbz/caraKrillin.png'
  },
  {
    id: uuid(),
    name: 'Goku',
    power: 9500,
    imagen: '../assets/imgDbz/caraGoku.png'
  },
  {
    id: uuid(),
    name: 'Vegueta',
    power: 7500,
    imagen: '../assets/imgDbz/caraVeguetta.png'


  }
];

//Cuando se esta emitiendo se obtiene un nuevo personaje
onNuevoPersonajeMain(personaje:Personaje): void{
  console.log('Main Page');

console.log(personaje);

const newPersonaje:Personaje = {
  id:uuid(),
  ...personaje
}
this.personajes.push(newPersonaje)

}

// onDeletePersonaje(index:number):void{
//   this.personajes.splice(index,1)
//   console.log(this.personajes);

// }

deletePersonajeById(id:string):void{
  this.personajes = this.personajes.filter(personaje => personaje.id !==id);
}



}
