import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { ICharacter } from '../interfaces/character';

@Injectable({
  providedIn: 'root'
})
export class DbzService {


  public characters: ICharacter[] = [{
    id: uuid(),
    nameCha: 'Krillin',
    power: 500
  },
  {
    id: uuid(),
    nameCha: 'Goku',
    power: 10000
  },
  {
    id: uuid(),
    nameCha: 'Freezer',
    power: 5000
  }
];

  newCharacter( character: ICharacter): void {

    const newCharacter: ICharacter = {
      id: uuid(), ...character
    };

    this.characters.push(newCharacter);
  }

  deleteCharacter( index: string): void {
    // this.characters.splice(index, 1);

    this.characters = this.characters.filter( character => character.id !== index);
  }



  constructor() { }
}
