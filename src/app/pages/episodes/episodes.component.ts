import { Component } from '@angular/core';
import Paginator from '../../models/Paginator';
import { IEpisode } from '../../types/episode.interface';
import { EpisodeService } from '../../services/episode/episode.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrl: './episodes.component.scss',
})
export class EpisodesComponent {
  episodesPaginator: Paginator<IEpisode> = new Paginator();

  isLoading = false;

  constructor(private episodeService: EpisodeService) {}
  ngOnInit(): void {
    this.isLoading = true;
    this.getEpisodes();
  }

  getEpisodes() {
    this.episodeService
      .getEpisodes(this.episodesPaginator.params)
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe({
        next: (response) => {
          this.episodesPaginator.setData(response);
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  onVisible() {
    if (!this.episodesPaginator.info?.next) return;
    this.episodesPaginator.page++;

    this.getEpisodes();
  }
}
