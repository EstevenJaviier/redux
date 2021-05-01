import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { counterReducer } from './character.reducer';

export const charactersFeatureKey = 'characters';

export interface State {}

export const reducers: ActionReducerMap<State> = { counterReducer };

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
