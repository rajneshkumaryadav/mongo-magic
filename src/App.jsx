import React, { useState, useEffect } from 'react';
import LandingScreen from './components/LandingScreen';
import GameHeader from './components/GameHeader';
import LevelInfo from './components/LevelInfo';
import MenuPreview from './components/MenuPreview';
import QueryInput from './components/QueryInput';
import Feedback from './components/Feedback';
import ResultDisplay from './components/ResultDisplay';
import NameModal from './components/NameModal';
import { useGameState } from './hooks/useGameState';
import { levels } from './data/levels';
import { validateQuery, getQueryFeedback } from './utils/queryValidator';

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [showNameModal, setShowNameModal] = useState(false);
  const [playerName, setPlayerName] = useState('');
  const [query, setQuery] = useState('');
  const [feedback, setFeedback] = useState('');
  const [showHint, setShowHint] = useState(false);
  const [levelComplete, setLevelComplete] = useState(false);

  const {
    currentLevel,
    score,
    lives,
    streak,
    resetGame,
    nextLevel,
    addScore,
    loseLife,
    incrementStreak
  } = useGameState();

  const currentLevelData = levels[currentLevel - 1];

  useEffect(() => {
    const storedName = localStorage.getItem('playerName');
    if (storedName) {
      setPlayerName(storedName);
    }
  }, []);

  const handleStartGame = () => {
    const storedName = localStorage.getItem('playerName');
    if (storedName) {
      setPlayerName(storedName);
      setGameStarted(true);
    } else {
      setShowNameModal(true);
    }
  };

  const handleNameSave = (name) => {
    setPlayerName(name);
    localStorage.setItem('playerName', name);
    setShowNameModal(false);
    setGameStarted(true);
  };

  const handleShowHint = () => {
    if (!showHint && lives > 1) {
      loseLife();
      setFeedback(`💡 Hint revealed! You lost a life for using the hint.`);
      setTimeout(() => setFeedback(''), 2000);
    }
    setShowHint(!showHint);
  };

  const checkQuery = () => {
    const isCorrect = validateQuery(query, currentLevelData.correctQuery);
    const feedbackData = getQueryFeedback(isCorrect, currentLevelData.points, streak);
    
    if (isCorrect) {
      addScore(feedbackData.points);
      incrementStreak();
      setFeedback(feedbackData.message);
      setLevelComplete(true);
      
      setTimeout(() => {
        if (currentLevel < levels.length) {
          nextLevel();
          setQuery('');
          setFeedback('');
          setLevelComplete(false);
          setShowHint(false);
        } else {
          setFeedback(`🏆 Congratulations ${playerName}! You completed all levels!`);
        }
      }, 2000);
    } else {
      loseLife();
      setFeedback(feedbackData.message);
      
      if (lives <= 1) {
        setFeedback(`💔 Game Over ${playerName}! Starting from level 1...`);
        setTimeout(() => {
          handleReset();
        }, 2000);
      }
    }
  };

  const handleReset = () => {
    resetGame();
    setQuery('');
    setFeedback('');
    setShowHint(false);
    setLevelComplete(false);
  };

  const handleNewPlayer = () => {
    localStorage.removeItem('playerName');
    setPlayerName('');
    setGameStarted(false);
    setShowNameModal(false);
    handleReset();
  };

  if (!gameStarted) {
    return (
      <>
        <LandingScreen onStartGame={handleStartGame} />
        <NameModal
          isOpen={showNameModal}
          onClose={() => setShowNameModal(false)}
          onSave={handleNameSave}
        />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-purple-100 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Player Welcome Bar */}
        {playerName && (
          <div className="kid-header mb-4 flex justify-between items-center animate-floaty">
            <div>
              <span className="font-bold text-lg">🎉 Welcome back, Chef {playerName}! 👨‍🍳</span>
            </div>
            <button
              onClick={handleNewPlayer}
              className="kid-button text-sm py-1 px-3"
            >
              🔄 New Player
            </button>
          </div>
        )}

        <div className="kid-score-box">
          <GameHeader 
            currentLevel={currentLevel}
            totalLevels={levels.length}
            score={score}
            lives={lives}
            streak={streak}
          />
        </div>

        <LevelInfo level={currentLevelData} />
        <MenuPreview />

        <QueryInput
          query={query}
          setQuery={setQuery}
          onRunQuery={checkQuery}
          onShowHint={handleShowHint}
          onReset={handleReset}
          showHint={showHint}
          levelComplete={levelComplete}
          lives={lives}
        />

        {feedback && (
          <div className="kid-feedback">
            <Feedback
              feedback={feedback}
              showHint={showHint}
              hint={currentLevelData.hint}
            />
          </div>
        )}

        <ResultDisplay
          result={currentLevelData.expectedResult}
          levelComplete={levelComplete}
        />
      </div>
    </div>
  );
}

export default App;
