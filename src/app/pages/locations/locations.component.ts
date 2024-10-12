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

  searchValue = '';
  debounce: any;
  constructor(private locationService: LocationService) {}

  ngOnInit(): void {
    this.getLocations();
  }

  getLocations() {
    this.isLoading = true;
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

  handleSearchChange(value: string) {
    if (this.debounce) clearTimeout(this.debounce);
    this.debounce = setTimeout(() => {
      this.searchValue = value.toLowerCase();
      this.locationsPaginator.params = { name: this.searchValue };
      this.getLocations();
    }, 1000);
  }

  onVisible() {
    if (!this.locationsPaginator.info?.next) return;
    this.locationsPaginator.page++;

    this.getLocations();
  }
}
