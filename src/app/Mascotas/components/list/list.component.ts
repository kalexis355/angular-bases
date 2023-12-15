import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Mascosta } from '../../interfaces/mascota.interface';
import {v4 as uuid} from 'uuid';

@Component({
  selector: 'app-list-mascotas',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  //mascota por defecto
  @Input()
  public mascotaLista: Mascosta[] = [
    {
      // id: uuid(),
      name:'Bruno',
      raza:'Coocker',
      age:12
    }
  ]
  @Output()
  public emisionId:EventEmitter<string> = new EventEmitter()

  borrarId(id:string){
    console.log(id);

    this.emisionId.emit(id)
  }
}
