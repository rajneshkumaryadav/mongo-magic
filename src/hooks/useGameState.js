import { useState, useEffect } from 'react';
import { levels } from '../data/levels';

export const useGameState = () => {
  // Get initial state from localStorage
  const getInitialState = () => {
    try {
      const saved = localStorage.getItem('mongoQueryGameProgress');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (error) {
      console.error('Error loading game progress:', error);
    }
    
    return {
      currentLevel: 1,
      score: 0,
      lives: 3,
      streak: 0,
      playerName: '',
      lastPlayed: null
    };
  };

  const [gameState, setGameState] = useState(getInitialState);
  const [currentLevel, setCurrentLevel] = useState(gameState.currentLevel);
  const [score, setScore] = useState(gameState.score);
  const [lives, setLives] = useState(gameState.lives);
  const [streak, setStreak] = useState(gameState.streak);

  // Save progress to localStorage whenever state changes
  const saveProgress = () => {
    const progressData = {
      currentLevel,
      score,
      lives,
      streak,
      playerName: localStorage.getItem('playerName') || '',
      lastPlayed: new Date().toISOString(),
      totalPlayTime: gameState.totalPlayTime || 0
    };
    
    try {
      localStorage.setItem('mongoQueryGameProgress', JSON.stringify(progressData));
    } catch (error) {
      console.error('Error saving game progress:', error);
    }
  };

  const resetGame = () => {
    setCurrentLevel(1);
    setScore(0);
    setLives(5);
    setStreak(0);
    
    // Save the reset state
    const resetData = {
      currentLevel: 1,
      score: 0,
      lives: 5,
      streak: 0,
      playerName: localStorage.getItem('playerName') || '',
      lastPlayed: new Date().toISOString(),
      gamesPlayed: (gameState.gamesPlayed || 0) + 1
    };
    
    try {
      localStorage.setItem('mongoQueryGameProgress', JSON.stringify(resetData));
    } catch (error) {
      console.error('Error saving game progress:', error);
    }
  };

  const nextLevel = () => {
    if (currentLevel < levels.length) {
      setCurrentLevel(prev => prev + 1);
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

  // Auto-save progress whenever any state changes
  useEffect(() => {
    saveProgress();
  }, [currentLevel, score, lives, streak]);

  // Load progress when component mounts
  useEffect(() => {
    const saved = getInitialState();
    if (saved.lastPlayed) {
      setCurrentLevel(saved.currentLevel);
      setScore(saved.score);
      setLives(saved.lives);
      setStreak(saved.streak);
    }
  }, []);

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
    saveProgress,
    gameState
  };
};