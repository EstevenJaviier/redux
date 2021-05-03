import { createAction, props } from '@ngrx/store';
import { Character } from 'src/app/interfaces/character.interface';

export const loadCharacters = createAction('[Character/App] loadCharacters');
export const loadCharactersSuccess = createAction(
  '[Character/Api] load Characters Success',
  props<{ characters: Character[] }>()
);
export const loadCharactersFailure = createAction(
  '[Character/Api] load Characters Failure',
  props<{ error: { message: string; status: number } }>()
);

export const loadCharacterById = createAction(
  '[Character/App] loadCharacter By Id',
  props<{ id: number }>()
);
export const loadCharacterByIdSuccess = createAction(
  '[Character/Api] load Character By Id Success',
  props<{ character: Character }>()
);
export const loadCharacterByIdFailure = createAction(
  '[Character/Api] load CharacterById Failure',
  props<{ error: { message: string; status: number } }>()
);
