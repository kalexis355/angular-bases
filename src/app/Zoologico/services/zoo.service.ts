import { Injectable } from '@angular/core';
import { Zoo } from '../interfaces/zoo.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class ZooService {

  public animalesArreglo: Zoo[] = [
    {
      id: uuid(),
      name: 'Gorila',
      habitat: 'Selva',
      jaula: 4,
    },
    {
      id: uuid(),
      name: 'Serpiente',
      habitat: 'Pantano',
      jaula: 8,
    },
    {
      id: uuid(),
      name: 'Oso',
      habitat: 'Selva',
      jaula: 3,
    },
  ];


  AgregarAnimal(animal:Zoo):void{

    const animalNuevo:Zoo={
      id: animal.id,
      name: animal.name,
      habitat: animal.habitat,
      jaula: animal.jaula
    }

    if(animal.name.length>0){
      this.animalesArreglo.push(animalNuevo);
    }


  }

  borrarAnimal(id:string):void{
    this.animalesArreglo = this.animalesArreglo.filter(animal => animal.id !== id);
  }
}
