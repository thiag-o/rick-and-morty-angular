import {
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  KeyValueDiffer,
  KeyValueDiffers,
  OnChanges,
  OnInit,
  SimpleChanges,
  TemplateRef,
  contentChild,
  viewChild,
} from '@angular/core';
import { CharacterService } from '../../services/character/character.service';
import { ICharacter } from '../../types/character.interface';
import Paginator from '../../models/Paginator';
import { finalize } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { InputSearchComponent } from '../../components/input-search/input-search.component';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.scss',
})
export class CharactersComponent implements OnInit {
  charactersPaginator: Paginator<ICharacter> = new Paginator();
  isLoading = false;
  searchValue = '';
  debounce: any;

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters() {
    this.isLoading = true;

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

  handleSearchChange(value: string) {
    if (this.debounce) clearTimeout(this.debounce);
    this.debounce = setTimeout(() => {
      this.searchValue = value.toLowerCase();
      this.charactersPaginator.params = { name: this.searchValue };
      this.getCharacters();
    }, 1000);
  }
  onVisible() {
    if (!this.charactersPaginator.info?.next) return;
    this.charactersPaginator.page++;

    this.getCharacters();
  }
}
