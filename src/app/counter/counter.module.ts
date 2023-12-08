import { NgModule } from '@angular/core';
import { CounterComponent } from './components/counter/counter.component';

@NgModule({
declarations: [
  CounterComponent
],
exports:[
  CounterComponent
]
})
//este modulo solo esta disponible para todas las carpetas de la carpeta counter
//para que se pueda usar en otro modulo se deve de exportar
export class CounterModule{

}
