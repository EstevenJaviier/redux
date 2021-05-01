import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from 'src/app/models/books.model';

@Component({
  selector: 'app-book-collection',
  template: `
    <div class="book-item" *ngFor="let book of books">
      <p>
        <strong>{{ book.volumeInfo.title }}</strong>
      </p>
      <span> by {{ book.volumeInfo.authors }}</span>
      <button (click)="remove.emit(book.id)" data-test="remove-button">
        Remove from Collection
      </button>
    </div>
  `,
  styles: [''],
})
export class BookCollectionComponent implements OnInit {
  @Input() books: Array<Book>;
  @Output() remove = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
