import { Component, EventEmitter, Input, Output} from '@angular/core';
import { ICharacter } from '../../interfaces/character';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {

  @Output()
  public characterSelect : EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList : ICharacter[] = [];

  onDelete( index?: string): void {

    if( !index) return;

    this.characterSelect.emit(index);
  }

  // deleteCharacter( num: number): void {
  //   // this.characterList.splice(num, 1);
  // }
}
