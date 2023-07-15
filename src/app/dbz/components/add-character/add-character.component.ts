import { Component, EventEmitter, Output } from '@angular/core';
import { ICharacter } from '../../interfaces/character';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  @Output()
  public newCharacter: EventEmitter<ICharacter> = new EventEmitter();

  public character: ICharacter = {
    nameCha: '',
    power: 0
  };

  addCharacter(): void {

    if( this.character.nameCha.length === 0) return;

    this.newCharacter.emit(this.character);

    this.character.nameCha = '';
    this.character.power = 0;
  }
}
