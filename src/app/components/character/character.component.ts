import { Component, Input } from '@angular/core';
import { ICharacter } from '../../types/character.interface';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrl: './character.component.scss',
})
export class CharacterComponent {
  @Input({ required: true }) character!: ICharacter;
}
