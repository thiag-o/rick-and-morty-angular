import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ComponentsModule } from './components/components.module';
import { HomeModule } from './pages/home/home.module';
import { provideHttpClient } from '@angular/common/http';

import { LocationsModule } from './pages/locations/locations.module';
import { EpisodesModule } from './pages/episodes/episodes.module';
import { CharactersModule } from './pages/characters/characters.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    LocationsModule,
    EpisodesModule,
    CharactersModule,
    ComponentsModule,
  ],

  providers: [provideAnimationsAsync(), provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
