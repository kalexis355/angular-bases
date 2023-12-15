import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddMascotaComponent } from './components/add-mascota/add-mascota.component';
import { ListComponent } from './components/list/list.component';
import {MascotaComponentPage } from './pages/main-page-mascota.component';



@NgModule({
  declarations: [
    AddMascotaComponent,
    ListComponent,
    MascotaComponentPage
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    MascotaComponentPage
  ]
})
export class MascotasModule { }
