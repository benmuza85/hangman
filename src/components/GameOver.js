// Importing necessary libraries and components
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { restartGame } from '../redux/actions/gameActions';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';

// Styled component for the container that will wrap the game over message and button
const GameOverContainer = styled.div`
  text-align: center;
  margin-top: 20px;
`;

// Functional component that represents the game over screen
const GameOver = () => {
  // Using useSelector to extract the necessary state properties from the Redux store
  const { word, wrongGuesses, maxGuesses, guessedLetters } = useSelector(state => state);
  // Using useDispatch to get the dispatch function for dispatching actions
  const dispatch = useDispatch();

  // Determining if the game is over based on the number of wrong guesses
  const isGameOver = wrongGuesses >= maxGuesses;
  // Determining if the game is won by checking if all letters in the word have been guessed
  const isGameWon = word.split('').every(letter => guessedLetters.includes(letter));

  return (
    // Container for the game over message and restart button
    <GameOverContainer>
      {/* Displaying a message if the game is lost */}
      {isGameOver && <div>You lost! The word was <strong>{word}</strong>.</div>}
      {/* Displaying a message if the game is won */}
      {isGameWon && <div>Congratulations! You guessed the word <strong>{word}</strong>.</div>}
      {/* Displaying the restart button if the game is either lost or won */}
      {(isGameOver || isGameWon) && (
        <Button variant="primary" onClick={() => dispatch(restartGame())}>
          Restart Game
        </Button>
      )}
    </GameOverContainer>
  );
};

// Exporting the GameOver component as the default export
export default GameOver;
