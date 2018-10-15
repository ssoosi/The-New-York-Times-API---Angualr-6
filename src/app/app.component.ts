import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'The New York Times';

  repos;
  constructor(http: HttpClient){
  //keyHere = "c5719fc030bf4141bbde82da2502e551";
    const path ='https://api.github.com/search/repositories?q=angular';
    //this.repos.get("https://api.nytimes.com/svc/topstories/v2/world.json",{params: {'api-key': "c5719fc030bf4141bbde82da2502e551"}})
    this.repos = http.get<any>(path)
    .pipe(
        map(data => data.items)
    )
  }
         
}