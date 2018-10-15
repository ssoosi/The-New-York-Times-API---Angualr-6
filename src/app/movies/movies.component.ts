import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies;
    constructor(http: HttpClient){
    const path ='https://api.nytimes.com/svc/movies/v2/reviews/picks.json?api-key=c5719fc030bf4141bbde82da2502e551';
    this.movies = http.get<any>(path)
    .pipe(
        map(data => data.results)
    )
  }

  ngOnInit() {
  }

}
