import { Component, Input } from '@angular/core';
import { ILocation } from '../../types/location.interface';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrl: './location.component.scss',
})
export class LocationComponent {
  @Input({ required: true }) location!: ILocation;
}
