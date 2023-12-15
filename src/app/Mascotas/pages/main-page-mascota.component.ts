import { Component } from '@angular/core';
import { MascotaService } from '../services/mascota.service';
import { Mascosta } from '../interfaces/mascota.interface';

@Component({
  selector: 'app-mascota-main-page',
  templateUrl: './main-page-mascota.component.html',
  styleUrls: ['./main-page-mascota.component.css']
})
export class MascotaComponentPage {

  constructor(private mascotaService:MascotaService){}


  get mascota():Mascosta[]{
    return [...this.mascotaService.mascotaArreglo]
  }

  borrarMascota(id:string):void{
    this.mascotaService.borrarMascotaId(id);
  }

  nuevaMascota(mascota:Mascosta):void{
    this.mascotaService.nuevaMascotaMain(mascota)
  }
}
