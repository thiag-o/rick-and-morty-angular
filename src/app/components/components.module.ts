import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AppRoutingModule } from '../app-routing.module';
import { HeaderComponent } from './header/header.component';
import { CharacterComponent } from './character/character.component';
import { MatCardModule } from '@angular/material/card';
import { LocationComponent } from './location/location.component';
import { EpisodeComponent } from './episode/episode.component';

@NgModule({
  declarations: [
    HeaderComponent,
    CharacterComponent,
    LocationComponent,
    EpisodeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, MatCardModule],
  exports: [
    HeaderComponent,
    CharacterComponent,
    LocationComponent,
    EpisodeComponent,
  ],
})
export class ComponentsModule {}
