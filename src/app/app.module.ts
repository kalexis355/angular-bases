import { NgModule } from '@angular/core';
import "@angular/compiler";
import { BrowserModule } from '@angular/platform-browser';
import { CounterModule } from './counter/counter.module';
import { HeroesModule } from './Heroes/heroes.module';
import { AppComponent } from './app.component';
import { DbzModule } from './dbz/dbz.module';
import { MascotasModule } from './Mascotas/mascotas.module';
import { ZooModule } from './Zoologico/zoo.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CounterModule,
    HeroesModule,
    DbzModule,
    MascotasModule,
    ZooModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
