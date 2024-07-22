import { GUESS_LETTER, RESTART_GAME } from '../actions/gameActions';
import words from '../../assets/words.json';

const initialState = {
  word: words[Math.floor(Math.random() * words.length)],
  guessedLetters: [],
  wrongGuesses: 0,
  maxGuesses: 10,
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case GUESS_LETTER:
      const letter = action.payload;
      return {
        ...state,
        guessedLetters: [...state.guessedLetters, letter],
        wrongGuesses: state.word.includes(letter) ? state.wrongGuesses : state.wrongGuesses + 1,
      };
    case RESTART_GAME:
      return {
        ...state,
        word: words[Math.floor(Math.random() * words.length)],
        guessedLetters: [],
        wrongGuesses: 0,
      };
    default:
      return state;
  }
};

export default gameReducer;
