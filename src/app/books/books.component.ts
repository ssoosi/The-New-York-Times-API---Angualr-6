import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

      books;
      constructor(http: HttpClient){
      const path ='https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=c5719fc030bf4141bbde82da2502e551';
      this.books = http.get<any>(path)
      .pipe(
          map(data => data.results)
      )
    }

  ngOnInit() {
  }

}
