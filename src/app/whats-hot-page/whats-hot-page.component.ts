import { Component, OnInit } from '@angular/core';

import { MovieService } from '../services/movie.service';
import { Movie } from '../movie';

import { Constants } from '../config/constants';

@Component({
  selector: 'app-whats-hot-page',
  templateUrl: './whats-hot-page.component.html',
  styleUrls: ['./whats-hot-page.component.css']
})
export class WhatsHotPageComponent implements OnInit {
  movieResults: Movie[];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getTrending()
      .subscribe(resData => {
        this.movieResults = resData['results'];
      })
  }

  getImagePath(img_path){
    return Constants.BACKDROP_PATH + img_path;
  }
}
