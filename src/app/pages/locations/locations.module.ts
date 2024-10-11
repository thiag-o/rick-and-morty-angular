import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationsComponent } from './locations.component';
import { ComponentsModule } from '../../components/components.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ObserveVisibilityModule } from '../../directives/observe-visibility.module';

@NgModule({
  declarations: [LocationsComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    ObserveVisibilityModule,
    MatProgressSpinnerModule,
  ],
  exports: [LocationsComponent],
})
export class LocationsModule {}
