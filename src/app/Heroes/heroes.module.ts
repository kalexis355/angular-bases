import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ListComponent } from "./list/list.component";
import { HeroComponent } from "./hero/hero.component";


@NgModule({
  imports:[
    //con este modulo viene las directivas ngif y ngfor por eso se debe de importar
    //todos los modulos vienen en la parte de imports
    CommonModule
  ],
  declarations:[
    HeroComponent,
    ListComponent,
  ],
  exports:[
    HeroComponent,
    ListComponent,
  ]
})
export class HeroesModule{

}
