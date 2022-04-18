import { Injectable } from "@angular/core";

@Injectable()
export class Constants {
  private static readonly API_KEY: string = '31b8073c5e7605cb23df4674c1ae905d';

  public static readonly API_ENDPOINT: string = 'https://api.themoviedb.org/3/search/movie?api_key=' + Constants.API_KEY;

  public static readonly API_ENDPOINT_HOT: string = 'https://api.themoviedb.org/3/trending/movie/week?api_key=' + Constants.API_KEY;

  public static TitleOfApp: string = 'Movie Agenda - Remember what you want to watch!';

  public static BACKDROP_PATH: string = 'https://image.tmdb.org/t/p/original/';
}
