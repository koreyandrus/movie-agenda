import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css'],
})
export class SearchPageComponent implements OnInit {
  movieResults;
  searchTerm: string;
  constructor(private movieService: MovieService) {}

  ngOnInit(): void {}

  onSearchMovies(searchTerm) {
    this.movieService.searchMovies(searchTerm).subscribe((resData) => {
      console.log(resData);
    });

    // this.movieResults = resData['results'];
  }
}
