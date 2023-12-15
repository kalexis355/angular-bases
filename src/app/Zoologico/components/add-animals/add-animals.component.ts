import { Component, EventEmitter, Output } from '@angular/core';
import { Zoo } from '../../interfaces/zoo.interface';
import { v4 as uuid } from 'uuid';


@Component({
  selector: 'app-add-animals',
  templateUrl: './add-animals.component.html',
  styleUrls: ['./add-animals.component.css']
})
export class AddAnimalsComponent {

  @Output()
  public animalAEmitir:EventEmitter<Zoo> = new EventEmitter();

  public animalIngresado:Zoo={
    id:uuid(),
    name: '',
    habitat:'',
    jaula: 0,
  }

  emitirAnimal():void{

    const animalAEmitir:Zoo = {...this.animalIngresado}

    this.animalIngresado={
      id:uuid(),
      name:'',
      habitat:'',
      jaula:0
    }

    this.animalAEmitir.emit(animalAEmitir)
    console.log(animalAEmitir);

  }

}
