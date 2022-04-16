import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Movie } from '../movie';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  movie;
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getMovie()
      .subscribe((data => {
        // this.movie.id = data['id'];
        // this.movie.title = data['title'];
        // this.movie.poster = data['poster_path'];
        // this.movie.overview = data['overview'];
        // this.movie.releaseDate = data['release_date'];
        // this.movie.tagline = data['tagline'];

        console.log(typeof data);

      }))
  }

}
