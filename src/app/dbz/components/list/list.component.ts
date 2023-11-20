import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {

  @Output()
  public onDeletedId:EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[] = [
    {
      name:'Trunks',
      power:10
    }
  ]

  onDeleteCharacterById(id?:string):void{

    if(!id) return;

    this.onDeletedId.emit(id);
  }

 }
