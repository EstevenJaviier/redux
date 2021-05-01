import { createReducer, on, Action } from '@ngrx/store';
import { Book } from 'src/app/models/books.model';

import { retrievedBookList } from './books.actions';

export const initialState: ReadonlyArray<Book> = [];

export const booksReducer = createReducer(
  initialState,
  on(retrievedBookList, (state, { book }) => [...book])
);
