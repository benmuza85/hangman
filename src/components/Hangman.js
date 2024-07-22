import { useSelector } from 'react-redux';
import styled from 'styled-components';
import stage1 from '../assets/images/state1.GIF';
import stage2 from '../assets/images/state2.GIF';
import stage3 from '../assets/images/state3.GIF';
import stage4 from '../assets/images/state4.GIF';
import stage5 from '../assets/images/state5.GIF';
import stage6 from '../assets/images/state6.GIF';
import stage7 from '../assets/images/state7.GIF';
import stage8 from '../assets/images/state8.GIF';
import stage9 from '../assets/images/state9.GIF';
import stage10 from '../assets/images/state10.GIF';
import stage11 from '../assets/images/state11.GIF';

const images = [stage1, stage2, stage3, stage4, stage5, stage6, stage7, stage8, stage9, stage10, stage11];

const HangmanContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  img {
    width: 100%;
    max-width: 300px;
  }
`;

const WordContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  .letter-box {
    border: 2px solid #333;
    margin: 0 5px;
    padding: 10px;
    font-size: 1.5em;
    width: 40px;
    text-align: center;
  }

  .filled {
    border-color: green;
  }
`;

const Hangman = () => {
  const { wrongGuesses, word, guessedLetters } = useSelector(state => state);
  const renderWord = () =>
    word.split('').map((letter, index) => (
      <div key={index} className={`letter-box ${guessedLetters.includes(letter) ? 'filled' : ''}`}>
        {guessedLetters.includes(letter) ? letter : ''}
      </div>
    ));

  return (
    <div>
      <HangmanContainer>
        <img src={images[wrongGuesses]} alt={`Hangman stage ${wrongGuesses}`} />
      </HangmanContainer>
      <WordContainer>{renderWord()}</WordContainer>
    </div>
  );
};

export default Hangman;
