import { Component } from '@angular/core';
import { retry } from 'rxjs';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string= 'ironMan';
  public age: number = 34;
  public img: string = 'assets/ironman.png'

  //creacion de getters y setters
  //los get se ven como propiedades

  get capitalizedName():string{
    return this.name.toUpperCase()
  }

  //los metodos se invocan como parentesis
  getHeroDescription():string{
    return `${this.name} - ${this.age}`
  }

  changenHero(name:string):void{
    this.img='/assets/spiderman.png'
    this.name = name;
  }

  changeAge(edad:number):void{
    this.age= edad;
  }

  reset(){
    this.name='ironman'
    this.age = 34;
    this.img= 'assets/ironman.png'

  }

}
