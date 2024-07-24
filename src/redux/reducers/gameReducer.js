// Importing action types from the gameActions file
import { GUESS_LETTER, RESTART_GAME } from '../actions/gameActions';
// Importing the list of words from the JSON file
import words from '../../assets/words.json';

// Initial state of the game
const initialState = {
  word: words[Math.floor(Math.random() * words.length)], // Randomly selecting a word from the list
  guessedLetters: [], // Array to store guessed letters
  wrongGuesses: 0, // Counter for wrong guesses
  maxGuesses: 10, // Maximum number of allowed wrong guesses
};

// Reducer function to handle game state updates
const gameReducer = (state = initialState, action) => {
  // Switch statement to handle different action types
  switch (action.type) {
    case GUESS_LETTER:
      // Extracting the guessed letter from the action payload
      const letter = action.payload;
      return {
        ...state, // Returning the updated state
        guessedLetters: [...state.guessedLetters, letter], // Adding the guessed letter to the guessedLetters array
        wrongGuesses: state.word.includes(letter) ? state.wrongGuesses : state.wrongGuesses + 1, // Incrementing wrongGuesses if the letter is not in the word
      };
    case RESTART_GAME:
      // Returning a new state with a new word and reset guesses
      return {
        ...state,
        word: words[Math.floor(Math.random() * words.length)], // Randomly selecting a new word
        guessedLetters: [], // Resetting guessed letters
        wrongGuesses: 0, // Resetting wrong guesses
      };
    default:
      // Returning the current state if no relevant action type is matched
      return state;
  }
};

// Exporting the gameReducer as the default export
export default gameReducer;
