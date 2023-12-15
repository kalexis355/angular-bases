import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Mascosta } from '../interfaces/mascota.interface';
import { MascotasModule } from '../mascotas.module';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MascotaService {
  public mascotaArreglo: Mascosta[] = [
    {
      id: uuid(),
      name: 'paco',
      raza: 'Shandober',
      age: 10,
    },
    {
      id: uuid(),
      name: 'Pacha',
      raza: 'Mestiza',
      age: 3,
    },
    {
      id: uuid(),
      name: 'Luna',
      raza: 'pug',
      age: 1,
    },
  ];

  nuevaMascotaMain(mascota:Mascosta){

    // console.log(mascota);

    const nuevaMascota: Mascosta={
      id:uuid(),
      name: mascota.name,
      raza: mascota.raza,
      age: mascota.age
    }


    if(mascota.name.length>0){
    this.mascotaArreglo.push(nuevaMascota)
    console.log('hola',nuevaMascota)

    }
  }

  borrarMascotaId(id:string){
    //se borra filtrando el id enviado donde se obtendra un arreglo con todos los id diferentes al id enviado
    this.mascotaArreglo = this.mascotaArreglo.filter(mascota=>mascota.id!==id);
  }
}
