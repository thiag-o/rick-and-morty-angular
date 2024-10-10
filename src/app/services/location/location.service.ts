import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseResponseInterface } from '../../types/response.interface';
import { ILocation } from '../../types/location.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  constructor(private http: HttpClient) {}

  getLocations() {
    return this.http.get<BaseResponseInterface<ILocation>>(
      `${environment.API.baseURL}${environment.API.routes.location.getAll}`
    );
  }
}
