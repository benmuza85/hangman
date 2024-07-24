// Importing necessary libraries and assets
import { useSelector } from 'react-redux';
import styled from 'styled-components';

// Importing images for each stage of the Hangman game
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

// Array containing all the imported images
const images = [stage1, stage2, stage3, stage4, stage5, stage6, stage7, stage8, stage9, stage10, stage11];

// Styled component for the container that wraps the hangman image
const HangmanContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  img {
    width: 100%;
    max-width: 300px;
  }
`;

// Styled component for the container that displays the word with guessed letters
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

// Functional component that represents the Hangman game
const Hangman = () => {
  // Using useSelector to extract necessary state properties from the Redux store
  const { wrongGuesses, word, guessedLetters } = useSelector(state => state);

  // Function to render the word with guessed letters
  const renderWord = () =>
    word.split('').map((letter, index) => (
      <div key={index} className={`letter-box ${guessedLetters.includes(letter) ? 'filled' : ''}`}>
        {guessedLetters.includes(letter) ? letter : ''}
      </div>
    ));

  return (
    <div>
      {/* Container for the hangman image */}
      <HangmanContainer>
        <img src={images[wrongGuesses]} alt={`Hangman stage ${wrongGuesses}`} />
      </HangmanContainer>
      {/* Container for the word display */}
      <WordContainer>{renderWord()}</WordContainer>
    </div>
  );
};

// Exporting the Hangman component as the default export
export default Hangman;
