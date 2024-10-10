import { Component, Input } from '@angular/core';
import { IEpisode } from '../../types/episode.interface';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrl: './episode.component.scss',
})
export class EpisodeComponent {
  @Input({ required: true }) episode!: IEpisode;
}
