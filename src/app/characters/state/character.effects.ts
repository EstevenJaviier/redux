import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { CharacterService } from 'src/app/services/character.service';
import * as CharacterActions from 'src/app/characters/state/character.actions';

@Injectable()
export class CharacterEffects {
  loadCharacters$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CharacterActions.loadCharacters),
      mergeMap(() =>
        this.characterService.getCharacters().pipe(
          map((data) =>
            CharacterActions.loadCharactersSuccess({ characters: data.results })
          ),
          catchError((error) =>
            of(CharacterActions.loadCharactersFailure({ error }))
          )
        )
      )
    )
  );

  loadCharacterById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CharacterActions.loadCharacterById),
      mergeMap((props) =>
        this.characterService.getCharacterById(props.id).pipe(
          map((character) =>
            CharacterActions.loadCharacterByIdSuccess({ character })
          ),
          catchError((error) =>
            of(CharacterActions.loadCharacterByIdFailure({ error }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private characterService: CharacterService
  ) {}
}
