export const GUESS_LETTER = 'GUESS_LETTER';
export const RESTART_GAME = 'RESTART_GAME';

export const guessLetter = (letter) => ({
  type: GUESS_LETTER,
  payload: letter,
});

export const restartGame = () => ({
  type: RESTART_GAME,
});
