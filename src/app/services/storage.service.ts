import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Movie } from '../movie';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  movie: Movie;
  movies: Movie[];

  constructor(private http: HttpClient) {}

  getSavedMovies(): Observable<Movie[]> | any {
    this.http
      .get('https://movie-agenda-default-rtdb.firebaseio.com/movies.json')
      .pipe(
        map((responseData) => {
          const movieArray = [];
          for (let key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              movieArray.push({ ...responseData[key], arr_id: key });
            }
          }
          return movieArray;
        })
      )
      .subscribe((movies) => {
        this.movies = movies;
      });
  }

  saveMovie(movieData: Movie) {
    this.http
      .post(
        'https://movie-agenda-default-rtdb.firebaseio.com/movies.json',
        movieData
      )
      .subscribe((responseData) => {
        this.getSavedMovies();
      });
  }
}
