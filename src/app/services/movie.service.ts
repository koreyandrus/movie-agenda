import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  apiUrl: string = 'https://api.themoviedb.org/3/movie/550?api_key=31b8073c5e7605cb23df4674c1ae905d';
  movie: Object;

  constructor(private http: HttpClient) {}

  getMovie() {
    return this.http.get(this.apiUrl);
  }
}
