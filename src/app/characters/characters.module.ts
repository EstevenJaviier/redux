import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterListComponent } from './character-list/character-list.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { characterReducer } from './state/character.reducer';
import { CharacterEffects } from './state/character.effects';
import { RouterModule } from '@angular/router';
import { CharacterDetailsComponent } from './character-details/character-details.component';

@NgModule({
  declarations: [CharacterListComponent, CharacterDetailsComponent],
  imports: [
    CommonModule,
    RouterModule,
    StoreModule.forFeature('characters', characterReducer),
    EffectsModule.forFeature([CharacterEffects]),
  ],
  exports: [CharacterListComponent, CharacterDetailsComponent],
})
export class CharactersModule {}
