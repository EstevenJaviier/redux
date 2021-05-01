import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from 'src/app/models/books.model';

@Component({
  selector: 'app-book-list',
  template: `
    <div class="book-item" *ngFor="let book of books">
      <img
        [src]="book.volumeInfo?.imageLinks?.thumbnail"
        [alt]="book.volumeInfo.categories"
      />
      <p>
        <strong>{{ book.volumeInfo.title }}</strong>
      </p>
      <span> by {{ book.volumeInfo.authors }}</span>
      <button (click)="add.emit(book.id)" data-test="add-button">Add</button>
    </div>
  `,
  styles: [
    `
      button {
        color: white;
        background-color: #29b8db;
        border: none;
        padding: 5px 10px;
        border-radius: 4px;
      }
    `,
  ],
})
export class BookListComponent implements OnInit {
  @Input() books: Array<Book>;
  @Output() add = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
