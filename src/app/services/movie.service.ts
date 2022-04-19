import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

import { Constants } from '../config/constants';

import { Movie } from "../movie";
import { Observable, catchError } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  endpoint: string = Constants.API_ENDPOINT;
  searchParams;
  movie: Movie;
  movies: Movie[];

  constructor(private http: HttpClient) {
    this.getSavedMovies();
  }

  searchMovie(searchTerm): Observable<Movie[]> {
    return this.http.get<Movie[]>(Constants.API_ENDPOINT + "&query=" + searchTerm);
  }

  getTrending(): Observable<Movie[]> {
    return this.http.get<Movie[]>(Constants.API_ENDPOINT_HOT);
  }

  getSavedMovies(): Observable<Movie[]> | any {
    this.http.get('https://movie-agenda-default-rtdb.firebaseio.com/movies.json')
      .pipe(map(responseData => {
        const movieArray = [];
        for ( let key in responseData) {
          if(responseData.hasOwnProperty(key)) {
            movieArray.push({ ...responseData[key], arr_id: key })
          }
        }
        return movieArray;
      }))
      .subscribe(movies => {
        this.movies = movies;
      });
  }

  saveMovie(movieData: Movie) {
    this.http.post('https://movie-agenda-default-rtdb.firebaseio.com/movies.json', movieData)
      .subscribe(responseData => {
        this.getSavedMovies();
      })
  }
}
