import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CharacterState } from './character.state';

const getCharacterState = createFeatureSelector<CharacterState>('characters');

export const selectCharacter = createSelector(
  getCharacterState,
  (state: CharacterState) => state.characters
);

export const selectCharacterById = createSelector(
  getCharacterState,
  (state: CharacterState) => state.character
);
