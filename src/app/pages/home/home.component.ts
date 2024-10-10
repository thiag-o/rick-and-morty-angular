import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../services/character/character.service';
import { ICharacter } from '../../types/character.interface';

import { BaseResponseInterface } from '../../types/response.interface';
import { ILocation } from '../../types/location.interface';
import { LocationService } from '../../services/location/location.service';
import { EpisodeService } from '../../services/episode/episode.service';
import { IEpisode } from '../../types/episode.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  charactersResponse?: BaseResponseInterface<ICharacter>;
  locationsResponse?: BaseResponseInterface<ILocation>;
  episodesResponse?: BaseResponseInterface<IEpisode>;

  constructor(
    private characterService: CharacterService,
    private locationService: LocationService,
    private episodeService: EpisodeService
  ) {}
  ngOnInit(): void {
    this.getCharacters();
    this.getLocations();
    this.getEpisodes();
  }

  getCharacters() {
    this.characterService.getCharacters().subscribe({
      next: (response) => {
        this.charactersResponse = response;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  getLocations() {
    this.locationService.getLocations().subscribe({
      next: (response) => {
        this.locationsResponse = response;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  getEpisodes() {
    this.episodeService.getEpisodes().subscribe({
      next: (response) => {
        this.episodesResponse = response;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
