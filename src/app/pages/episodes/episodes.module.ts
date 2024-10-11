import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpisodesComponent } from './episodes.component';
import { ComponentsModule } from '../../components/components.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ObserveVisibilityModule } from '../../directives/observe-visibility.module';

@NgModule({
  declarations: [EpisodesComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    ObserveVisibilityModule,
    MatProgressSpinnerModule,
  ],
  exports: [EpisodesComponent],
})
export class EpisodesModule {}
