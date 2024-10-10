import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ICharacter } from '../../types/character.interface';
import { BaseResponseInterface } from '../../types/response.interface';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  constructor(private http: HttpClient) {}
  getCharacters() {
    return this.http.get<BaseResponseInterface<ICharacter>>(
      `${environment.API.baseURL}${environment.API.routes.character.getAll}`
    );
  }
}
