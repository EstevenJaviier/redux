import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Character } from 'src/app/interfaces/character.interface';
import { loadCharacterById, getCharacterId } from '../state/character.actions';
import {
  selectCharacterById,
  selectCurrentCharacter,
} from '../state/character.selects';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css'],
})
export class CharacterDetailsComponent implements OnInit {
  character$: Observable<Character>;

  constructor(private store: Store, private route: ActivatedRoute) {
    this.character$ = this.store.select(selectCurrentCharacter);
    // this.character$ = this.store.select(selectCharacterById);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.store.dispatch(getCharacterId({ id: +params.get('id') }));
    });
    // this.route.paramMap.subscribe((params: ParamMap) => {
    //   this.store.dispatch(loadCharacterById({ id: +params.get('id') }));
    // });
  }
}
