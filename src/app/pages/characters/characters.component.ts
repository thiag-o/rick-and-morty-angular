import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../services/character/character.service';
import { ICharacter } from '../../types/character.interface';
import Paginator from '../../models/Paginator';
import { finalize } from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.scss',
})
export class CharactersComponent implements OnInit {
  charactersPaginator: Paginator<ICharacter> = new Paginator();

  isLoading = false;

  constructor(private characterService: CharacterService) {}
  ngOnInit(): void {
    this.isLoading = true;
    this.getCharacters();
  }

  getCharacters() {
    this.characterService
      .getCharacters(this.charactersPaginator.params)
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe({
        next: (response) => {
          this.charactersPaginator.setData(response);
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  onVisible() {
    if (!this.charactersPaginator.info?.next) return;
    this.charactersPaginator.page++;

    this.getCharacters();
  }
}
