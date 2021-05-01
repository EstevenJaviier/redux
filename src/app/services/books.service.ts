import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from '../models/books.model';

@Injectable({ providedIn: 'root' })
export class GoogleBooksService {
  endpoint = 'https://www.googleapis.com/books/v1/';
  constructor(private http: HttpClient) {}

  getBooks(): Observable<Array<Book>> {
    const url = new URLSearchParams({
      maxResults: 40,
      orderBy: 'relevance',
      q: 'oliver sacks',
    } as any);

    return this.http
      .get<{ items: Book[] }>(this.endpoint + `volumes?${url}`)
      .pipe(map((books) => books.items || []));
  }
}
