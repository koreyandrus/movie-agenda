import { Injectable } from "@angular/core";

@Injectable()
export class Constants {
  public readonly API_ENDPOINT: string = 'https://api.themoviedb.org/3';

  public static TitleOfApp: string = 'Movie Agenda - Remember what you want to watch!';
}
