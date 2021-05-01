import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { GoogleBooksService } from 'src/app/services/books.service';
import { retrievedBookList, retrievedBookListSuccess } from './books.actions';

@Injectable()
export class BookEffects {
  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(retrievedBookList),
      mergeMap(() =>
        this.googleBooksService.getBooks().pipe(
          map((book) => retrievedBookListSuccess({ book })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private googleBooksService: GoogleBooksService
  ) {}
}
