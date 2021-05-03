import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadCharacters } from './characters/state/character.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(loadCharacters());
  }
}
