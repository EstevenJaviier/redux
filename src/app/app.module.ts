import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BookListComponent } from './components/book-list/book-list/book-list.component';
import { BookCollectionComponent } from './components/book-collection/book-collection/book-collection.component';
import { StoreModule } from '@ngrx/store';
import { booksReducer } from './state/books/books.reducer';
import { collectionReducer } from './state/collections/collection.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { BookEffects } from './state/books/books.effects';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [AppComponent, BookListComponent, BookCollectionComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    HttpClientModule,
    StoreModule.forRoot({ books: booksReducer, collection: collectionReducer }),
    EffectsModule.forRoot([BookEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
