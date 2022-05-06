import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Constants } from '../config/constants';

import { Movie } from '../movie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  baseUrl: string;
  apiKey: string;
  language: string;
  region: string;

  constructor(private http: HttpClient) {
    this.apiKey = '31b8073c5e7605cb23df4674c1ae905d';
    this.baseUrl = 'https://api.themoviedb.org/3';
    this.language = 'en-US';
    this.region = 'US';
  }

  searchMovies(searchTerm) {
    return this.http.get(
      `${this.baseUrl}search/movie?api_key=${this.apiKey}&query=${searchTerm}`
    );
  }

  getTrending(): Observable<Movie[]> {
    return this.http.get<Movie[]>(Constants.API_ENDPOINT_WHATS_HOT);
  }
}
