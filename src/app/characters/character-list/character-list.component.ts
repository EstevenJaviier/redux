import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Character } from 'src/app/interfaces/character.interface';
import { loadCharacters } from '../state/character.actions';
import { selectCharacters } from '../state/character.selects';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css'],
})
export class CharacterListComponent implements OnInit {
  characters$: Observable<Character[]>;

  constructor(private store: Store) {
    this.characters$ = this.store.select(selectCharacters);
  }

  ngOnInit(): void {
    this.store.dispatch(loadCharacters());
  }
}
