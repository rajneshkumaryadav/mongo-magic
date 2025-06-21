import React, { useState } from 'react';
import LandingScreen from './components/LandingScreen';
import GameHeader from './components/GameHeader';
import LevelInfo from './components/LevelInfo';
import MenuPreview from './components/MenuPreview';
import QueryInput from './components/QueryInput';
import Feedback from './components/Feedback';
import ResultDisplay from './components/ResultDisplay';
import { useGameState } from './hooks/useGameState';
import { levels } from './data/levels';
import { validateQuery, getQueryFeedback } from './utils/queryValidator';

function App() {
  const [gameStarted, setGameStarted] = useState(false);
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

  const startGame = () => {
    setGameStarted(true);
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
          setFeedback('🏆 Congratulations! You completed all levels!');
        }
      }, 2000);
    } else {
      loseLife();
      setFeedback(feedbackData.message);
      
      if (lives <= 1) {
        setFeedback('💔 Game Over! Starting from level 1...');
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

  if (!gameStarted) {
    return <LandingScreen onStartGame={startGame} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto">
        <GameHeader 
          currentLevel={currentLevel}
          totalLevels={levels.length}
          score={score}
          lives={lives}
          streak={streak}
        />
        
        <LevelInfo level={currentLevelData} />
        
        <MenuPreview />
        
        <QueryInput
          query={query}
          setQuery={setQuery}
          onRunQuery={checkQuery}
          onShowHint={() => setShowHint(!showHint)}
          onReset={handleReset}
          showHint={showHint}
          levelComplete={levelComplete}
        />
        
        <Feedback
          feedback={feedback}
          showHint={showHint}
          hint={currentLevelData.hint}
        />
        
        <ResultDisplay
          result={currentLevelData.expectedResult}
          levelComplete={levelComplete}
        />
      </div>
    </div>
  );
}

export default App;