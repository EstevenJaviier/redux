import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { GoogleBooksService } from './services/books.service';
import {
  addBook,
  removeBook,
  retrievedBookList,
} from './state/books/books.actions';
import {
  selectBooks,
  selectBookCollection,
} from './state/books/books.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  books$ = this.store.pipe(select(selectBooks));
  bookCollection$ = this.store.pipe(select(selectBookCollection));

  onAdd(bookId: string) {
    this.store.dispatch(addBook({ bookId }));
  }

  onRemove(bookId: string) {
    this.store.dispatch(removeBook({ bookId }));
  }

  constructor(private booksService: GoogleBooksService, private store: Store) {}

  ngOnInit() {
    this.booksService
      .getBooks()
      .subscribe((book) => this.store.dispatch(retrievedBookList({ book })));
  }
}
