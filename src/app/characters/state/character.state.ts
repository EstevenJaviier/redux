import { Character } from 'src/app/interfaces/character.interface';

export interface CharacterState {
  characters: Array<Character>;
  characterId: number;
}

export const initialState: CharacterState = {
  characters: [],
  characterId: null,
};
