import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Zoo } from '../../interfaces/zoo.interface';
import { v4 as uuid } from 'uuid';


@Component({
  selector: 'app-list-animals',
  templateUrl: './list-animals.component.html',
  styleUrls: ['./list-animals.component.css']
})
export class ListAnimalsComponent {

  @Input()
  public animalesLista:Zoo[] = [{
    id:uuid(),
    name: 'Leon',
    habitat:'Selva',
    jaula: 3
  }]

  @Output()
  public emisionIdAnimal:EventEmitter<string> = new EventEmitter();

  emitirIdAnimal(id:string){
    this.emisionIdAnimal.emit(id);
  }
}
