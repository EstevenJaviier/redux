import { createReducer, on } from '@ngrx/store';
import * as CharacterActions from './character.actions';
import { initialState, CharacterState } from './character.state';

const _characterReducer = createReducer(
  initialState,
  on(
    CharacterActions.loadCharactersSuccess,
    (state: CharacterState, action) => {
      return { ...state, characters: [...action.characters] };
    }
  ),
  on(CharacterActions.loadCharacterById, (state: CharacterState, action) => ({
    ...state,
    characterId: action.id,
  }))
);

export function characterReducer(state: CharacterState, action) {
  return _characterReducer(state, action);
}
