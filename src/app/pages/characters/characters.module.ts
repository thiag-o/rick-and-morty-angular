import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersComponent } from './characters.component';
import { ComponentsModule } from '../../components/components.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ObserveVisibilityModule } from '../../directives/observe-visibility.module';

@NgModule({
  declarations: [CharactersComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    ObserveVisibilityModule,
    MatProgressSpinnerModule,
  ],
  exports: [CharactersComponent],
})
export class CharactersModule {}
