import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddAnimalsComponent } from './components/add-animals/add-animals.component';
import { ListAnimalsComponent } from './components/list-animals/list-animals.component';
import { FormsModule } from '@angular/forms';
import { MainPageZooComponent } from './pages/main-page-zoo.component';



@NgModule({
  declarations: [
    AddAnimalsComponent,
    ListAnimalsComponent,
    MainPageZooComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports:[
    MainPageZooComponent
  ]
})
export class ZooModule { }
