import { useState, useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { levels } from '../data/levels';

export const useGameState = () => {
  const [gameProgress, setGameProgress] = useLocalStorage('mongoQueryGameProgress', {
    currentLevel: 1,
    score: 0,
    lives: 3,
    streak: 0
  });

  const [currentLevel, setCurrentLevel] = useState(gameProgress.currentLevel);
  const [score, setScore] = useState(gameProgress.score);
  const [lives, setLives] = useState(gameProgress.lives);
  const [streak, setStreak] = useState(gameProgress.streak);

  const saveProgress = () => {
    setGameProgress({
      currentLevel,
      score,
      lives,
      streak,
      lastPlayed: new Date().toISOString()
    });
  };

  const resetGame = () => {
    setCurrentLevel(1);
    setScore(0);
    setLives(3);
    setStreak(0);
    setGameProgress({
      currentLevel: 1,
      score: 0,
      lives: 3,
      streak: 0
    });
  };

  const nextLevel = () => {
    if (currentLevel < levels.length) {
      setCurrentLevel(prev => prev + 1);
      saveProgress();
    }
  };

  const addScore = (points) => {
    setScore(prev => prev + points);
  };

  const loseLife = () => {
    setLives(prev => prev - 1);
    setStreak(0);
  };

  const incrementStreak = () => {
    setStreak(prev => prev + 1);
  };

  useEffect(() => {
    saveProgress();
  }, [currentLevel, score, lives, streak]);

  return {
    currentLevel,
    score,
    lives,
    streak,
    resetGame,
    nextLevel,
    addScore,
    loseLife,
    incrementStreak,
    saveProgress
  };
};