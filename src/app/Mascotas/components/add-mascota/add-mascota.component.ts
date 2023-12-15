import { Component, Output, EventEmitter } from '@angular/core';
import { MascotaComponentPage } from '../../pages/main-page-mascota.component';
import { Mascosta } from '../../interfaces/mascota.interface';
import { v4 as uuid} from 'uuid';


@Component({
  selector: 'app-add-mascota',
  templateUrl: './add-mascota.component.html',
  styleUrls: ['./add-mascota.component.css']
})
export class AddMascotaComponent {

  //se crea la variable a emitir
  public mascota: Mascosta={
    id:uuid(),
    name:'',
    raza:'',
    age:0,

  }

  //se crea el evento
  @Output()
  public nuevaMascota:EventEmitter<Mascosta> = new  EventEmitter();

   emitirMascota():void{
    // se crea una copia de la mascota
    const mascotaAEmitir:Mascosta = { ...this.mascota}


    //despues se limpian los caracteres
    this.mascota = {
      id: uuid(),
      name: '',
      raza: '',
      age: 0,
    };

    this.nuevaMascota.emit(mascotaAEmitir);
    console.log(mascotaAEmitir);
  }


}
