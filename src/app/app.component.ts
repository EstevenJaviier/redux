import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
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

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(retrievedBookList());
  }

  onAdd(bookId: string) {
    this.store.dispatch(addBook({ bookId }));
  }

  onRemove(bookId: string) {
    this.store.dispatch(removeBook({ bookId }));
  }
}
