import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

import { Constants } from '../config/constants';

import { Movie } from "../movie";
import { Observable, catchError } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  endpoint: string = Constants.API_ENDPOINT;
  searchParams;
  movie: Movie;
  movieResults: Movie[];

  constructor(private http: HttpClient) {}

  searchMovie(searchTerm): Observable<Movie[]> {
    return this.http.get<Movie[]>(Constants.API_ENDPOINT + "&query=" + searchTerm);
  }

  getTrending(): Observable<Movie[]> {
    return this.http.get<Movie[]>(Constants.API_ENDPOINT_HOT);
  }

  saveMovie(movieData) {
    this.http.post('https://movie-agenda-default-rtdb.firebaseio.com/movies.json', movieData)
      .subscribe(responseData => {
        console.log(responseData);
      })
  }
}
