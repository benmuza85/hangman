import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { guessLetter } from '../redux/actions/gameActions';
import styled from 'styled-components';

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

const Letters = () => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const guessedLetters = useSelector(state => state.guessedLetters);
  const dispatch = useDispatch();

  return (
    <LettersContainer>
      {alphabet.map(letter => (
        <button
          key={letter}
          onClick={() => dispatch(guessLetter(letter))}
          className={guessedLetters.includes(letter) ? 'guessed' : ''}
          disabled={guessedLetters.includes(letter)}
        >
          {letter}
        </button>
      ))}
    </LettersContainer>
  );
};

export default Letters;
