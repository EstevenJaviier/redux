import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CharacterState } from './character.state';

const getCharacterState = createFeatureSelector<CharacterState>('characters');

export const selectCharacters = createSelector(
  getCharacterState,
  (state: CharacterState) => state.characters
);

export const selectCharacterById = createSelector(
  getCharacterState,
  (state: CharacterState) => state.character
);

export const selectCurrentCharacterId = createSelector(
  getCharacterState,
  (state: CharacterState) => state.characterId
);
export const selectCurrentCharacter = createSelector(
  getCharacterState,
  selectCurrentCharacterId,
  (state: CharacterState, id: number) =>
    state.characters.find((character) => character.id === id)
);
