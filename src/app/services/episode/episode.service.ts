import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseResponseInterface } from '../../types/response.interface';
import { IEpisode } from '../../types/episode.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EpisodeService {
  constructor(private http: HttpClient) {}

  getEpisodes() {
    return this.http.get<BaseResponseInterface<IEpisode>>(
      `${environment.API.baseURL}${environment.API.routes.episode.getAll}`
    );
  }
}
