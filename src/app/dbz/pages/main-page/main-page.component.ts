import { Component } from '@angular/core';
import { ICharacter } from '../../interfaces/character';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent {

  constructor( private dbzServicio: DbzService){

  }

  get characters(): ICharacter[]{
    return [...this.dbzServicio.characters];
  }

  deleteCharacter(id: string): void{
    this.dbzServicio.deleteCharacter(id);
  }

  newCharacter( character: ICharacter): void {
    this.dbzServicio.newCharacter(character);
  }
}
