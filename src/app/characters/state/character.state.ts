import { Character } from 'src/app/interfaces/character.interface';

export interface CharacterState {
  characters: Array<Character>;
  character: Character;
  characterId: number;
}

export const initialState: CharacterState = {
  characters: [],
  character: null,
  characterId: null,
};
