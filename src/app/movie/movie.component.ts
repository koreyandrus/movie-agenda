import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  title: string = 'Fight Club';
  releaseDate: string = '5-12-1999';
  poster: string = 'https://m.media-amazon.com/images/I/71QPnEkXygS._SY445_.jpg';


  constructor() { }

  ngOnInit(): void {
  }

}
