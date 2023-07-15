import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public hero: string = 'Iroman';
  public name: string = 'Daniel';
  public edad: number = 21;

  get capitalizeName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.edad}`
  }

  changeHeroAndName(): void {
    this.hero = 'Spiderman';
    this.name = 'Zamir';
  }

  changeEdad(): void {
    this.edad = 18;
  }
}
