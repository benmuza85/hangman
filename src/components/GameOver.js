import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { restartGame } from '../redux/actions/gameActions';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';

const GameOverContainer = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const GameOver = () => {
  const { word, wrongGuesses, maxGuesses, guessedLetters } = useSelector(state => state);
  const dispatch = useDispatch();

  const isGameOver = wrongGuesses >= maxGuesses;
  const isGameWon = word.split('').every(letter => guessedLetters.includes(letter));

  return (
    <GameOverContainer>
      {isGameOver && <div>You lost! The word was <strong>{word}</strong>.</div>}
      {isGameWon && <div>Congratulations! You guessed the word <strong>{word}</strong>.</div>}
      {(isGameOver || isGameWon) && (
        <Button variant="primary" onClick={() => dispatch(restartGame())}>
          Restart Game
        </Button>
      )}
    </GameOverContainer>
  );
};

export default GameOver;
