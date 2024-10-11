import {
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
  contentChild,
} from '@angular/core';
import Paginator from '../../models/Paginator';
import { ILocation } from '../../types/location.interface';
import { LocationService } from '../../services/location/location.service';
import { BehaviorSubject, Observable, Subscription, finalize } from 'rxjs';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.scss',
})
export class LocationsComponent implements OnInit {
  locationsPaginator: Paginator<ILocation> = new Paginator();

  isLoading = false;

  constructor(private locationService: LocationService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.getLocations();
  }

  getLocations() {
    this.locationService
      .getLocations(this.locationsPaginator.params)
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe({
        next: (response) => {
          this.locationsPaginator.setData(response);
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  onVisible() {
    if (!this.locationsPaginator.info?.next) return;
    this.locationsPaginator.page++;

    this.getLocations();
  }
}
