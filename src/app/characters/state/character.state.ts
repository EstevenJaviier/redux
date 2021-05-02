import { Character } from 'src/app/interfaces/character.interface';

export interface CharacterState {
  characters: Array<Character>;
  character: Character;
}

export const initialState: CharacterState = {
  characters: [],
  character: null,
};
