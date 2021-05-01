import { createAction, props } from '@ngrx/store';
import { Book } from 'src/app/models/books.model';

export const addBook = createAction(
  '[Book List] Add Book',
  props<{ bookId: string }>()
);

export const removeBook = createAction(
  '[Book Collection] Remove Book',
  props<{ bookId: string }>()
);

export const retrievedBookList = createAction(
  '[Book List/Page] Retrieve Books'
);

export const retrievedBookListSuccess = createAction(
  '[Book List/API] Retrieve Books Success',
  props<{ book: Book[] }>()
);
