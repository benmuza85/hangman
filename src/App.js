import GlobalStyles from './GlobalStyles';
import Header from './components/Header';
import Hangman from './components/Hangman';
import Letters from './components/Letters';
import Help from './components/Help';
import GameOver from './components/GameOver';
import './App.css';

function App() {
  return (
      <>
        <GlobalStyles />
        <div className="App">
          <Header />
          <Hangman />
          <Letters />
          <Help />
          <GameOver />
        </div>
      </>
    
  );
}

export default App;
