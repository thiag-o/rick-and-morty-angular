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

  searchValue = '';
  debounce: any;

  constructor(private episodeService: EpisodeService) {}
  ngOnInit(): void {
    this.getEpisodes();
  }

  getEpisodes() {
    this.isLoading = true;
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
  handleSearchChange(value: string) {
    if (this.debounce) clearTimeout(this.debounce);
    this.debounce = setTimeout(() => {
      this.searchValue = value.toLowerCase();
      this.episodesPaginator.params = { name: this.searchValue };
      this.getEpisodes();
    }, 1000);
  }

  onVisible() {
    if (!this.episodesPaginator.info?.next) return;
    this.episodesPaginator.page++;

    this.getEpisodes();
  }
}
