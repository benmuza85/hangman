// Importing necessary libraries and components
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { guessLetter } from '../redux/actions/gameActions';
import styled from 'styled-components';

// Creating a styled component for the container that wraps the letters
const LettersContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 20px;

  button {
    margin: 5px;
    padding: 10px 15px;
    font-size: 1.2em;
    border: 1px solid #333;
    background-color: #fff;
    color: #333;

    &.guessed {
      background-color: #333;
      color: #fff;
      border-color: #333;
    }
  }
`;

// Functional component that represents the letter selection buttons
const Letters = () => {
  // Array of alphabet letters
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  // Using useSelector to extract guessed letters from the Redux store
  const guessedLetters = useSelector(state => state.guessedLetters);
  // Using useDispatch to get the dispatch function for dispatching actions
  const dispatch = useDispatch();

  return (
    // Container for the letter buttons
    <LettersContainer>
      {/* Mapping through the alphabet array to create a button for each letter */}
      {alphabet.map(letter => (
        <button
          key={letter} // Unique key for each button
          onClick={() => dispatch(guessLetter(letter))} // Dispatching guessLetter action on button click
          className={guessedLetters.includes(letter) ? 'guessed' : ''} // Adding 'guessed' class if the letter has been guessed
          disabled={guessedLetters.includes(letter)} // Disabling the button if the letter has been guessed
        >
          {letter}
        </button>
      ))}
    </LettersContainer>
  );
};

// Exporting the Letters component as the default export
export default Letters;
