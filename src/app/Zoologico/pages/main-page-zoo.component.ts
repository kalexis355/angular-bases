import { Component } from '@angular/core';
import { ZooService } from '../services/zoo.service';
import { Zoo } from '../interfaces/zoo.interface';

@Component({
  selector: 'app-main-page-zoo',
  templateUrl: './main-page-zoo.component.html',
  styleUrls: ['./main-page-zoo.component.css']
})
export class MainPageZooComponent {
  constructor(private zooService:ZooService){}

  get animalesRecuperado():Zoo[]{
    return this.zooService.animalesArreglo
  }

  nuevoAnimal(animal:Zoo):void{
    this.zooService.AgregarAnimal(animal)
  }

  borrarAnimal(id:string):void{
    this.zooService.borrarAnimal(id);
  }
}
