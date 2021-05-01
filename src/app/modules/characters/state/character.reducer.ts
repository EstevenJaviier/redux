import { createReducer, on } from '@ngrx/store';

export const initialState = 0;

const _counterReducer = createReducer(initialState);

export function counterReducer(state, action) {
  return _counterReducer(state, action);
}
