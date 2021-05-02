import { createAction, props } from '@ngrx/store';
import { Character } from 'src/app/interfaces/character.interface';

export const loadCharcters = createAction('[Character/App] loadCharcters');
export const loadCharctersSuccess = createAction(
  '[Character/Api] load Charcters Success',
  props<{ characters: Character[] }>()
);
export const loadCharctersFailure = createAction(
  '[Character/Api] load Charcters Failure',
  props<{ error: { message: string; status: number } }>()
);

export const loadCharcterById = createAction(
  '[Character/App] loadCharcter By Id',
  props<{ id: number }>()
);
export const loadCharcterByIdSuccess = createAction(
  '[Character/Api] load Charcter By Id Success',
  props<{ character: Character }>()
);
export const loadCharcterByIdFailure = createAction(
  '[Character/Api] load CharcterById Failure',
  props<{ error: { message: string; status: number } }>()
);
