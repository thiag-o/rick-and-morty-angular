import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ICharacter } from '../../types/character.interface';
import { BaseResponseInterface } from '../../types/response.interface';
import Paginator from '../../models/Paginator';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  constructor(private http: HttpClient) {}
  getCharacters(params?: HttpParams) {
    console.log(params?.get('page'));
    return this.http.get<BaseResponseInterface<ICharacter>>(
      `${environment.API.baseURL}${environment.API.routes.character.getAll}`,
      { params }
    );
  }
}
