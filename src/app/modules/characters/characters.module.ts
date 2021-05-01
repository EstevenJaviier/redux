import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CharactersComponent } from './characters.component';
import { StoreModule } from '@ngrx/store';
import * as fromCharacters from './state';
import { EffectsModule } from '@ngrx/effects';
import { CharacterEffects } from './state/character.effects';

const routes: Routes = [{ path: '', component: CharactersComponent }];

@NgModule({
  declarations: [CharactersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(
      fromCharacters.charactersFeatureKey,
      fromCharacters.reducers,
      { metaReducers: fromCharacters.metaReducers }
    ),
    EffectsModule.forFeature([CharacterEffects]),
  ],
})
export class CharactersModule {}
