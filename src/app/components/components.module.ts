import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AppRoutingModule } from '../app-routing.module';
import { HeaderComponent } from './header/header.component';
import { CharacterComponent } from './character/character.component';
import { MatCardModule } from '@angular/material/card';
import { LocationComponent } from './location/location.component';
import { EpisodeComponent } from './episode/episode.component';
import { FooterComponent } from './footer/footer.component';
import { InputSearchComponent } from './input-search/input-search.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    HeaderComponent,
    CharacterComponent,
    LocationComponent,
    EpisodeComponent,
    FooterComponent,
    InputSearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    HeaderComponent,
    CharacterComponent,
    LocationComponent,
    EpisodeComponent,
    FooterComponent,
    InputSearchComponent,
  ],
})
export class ComponentsModule {}
