import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-lista',
  templateUrl: './heroes-lista.component.html',
  styleUrls: ['./heroes-lista.component.css']
})
export class HeroesListaComponent {
  public heroesNames: string[] = ['Spiderman', 'Iroman', 'Hulk', 'Thor', 'SheHulk'];
  public deleteHero?: string;

  borrarUltimo(): void {
    this.deleteHero = this.heroesNames.pop();
  }
}
