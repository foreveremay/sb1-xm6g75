import React, { useState, useEffect } from 'react';
import { questions } from './data/questions';
import { QuestionCard } from './components/QuestionCard';
import type { GameState } from './types';

function App() {
  const [gameState, setGameState] = useState<GameState>({
    currentQuestionIndex: 0,
    selectedAnswers: [],
    showAnswer: false,
  });

  useEffect(() => {
    let timer: number;
    if (gameState.showAnswer) {
      timer = window.setTimeout(() => {
        if (gameState.currentQuestionIndex < questions.length - 1) {
          setGameState({
            currentQuestionIndex: gameState.currentQuestionIndex + 1,
            selectedAnswers: [],
            showAnswer: false,
          });
        }
      }, 10000);
    }
    return () => clearTimeout(timer);
  }, [gameState.showAnswer]);

  const handleAnswerSelect = (index: number) => {
    const currentQuestion = questions[gameState.currentQuestionIndex];
    
    if (currentQuestion.isMultiSelect) {
      setGameState(prev => ({
        ...prev,
        selectedAnswers: prev.selectedAnswers.includes(index)
          ? prev.selectedAnswers.filter(i => i !== index)
          : [...prev.selectedAnswers, index],
      }));
    } else {
      setGameState(prev => ({
        ...prev,
        selectedAnswers: [index],
      }));
    }
  };

  const handleSubmit = () => {
    setGameState(prev => ({
      ...prev,
      showAnswer: true,
    }));
  };

  const currentQuestion = questions[gameState.currentQuestionIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl mx-auto text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          婚禮問答遊戲
        </h1>
        <p className="text-gray-600">
          問題 {gameState.currentQuestionIndex + 1} / {questions.length}
        </p>
      </div>

      <QuestionCard
        question={currentQuestion}
        selectedAnswers={gameState.selectedAnswers}
        showAnswer={gameState.showAnswer}
        onAnswerSelect={handleAnswerSelect}
        onSubmit={handleSubmit}
      />

      {gameState.showAnswer && (
        <div className="mt-4 text-gray-600">
          下一題將在 10 秒後自動顯示...
        </div>
      )}
    </div>
  );
}

export default App;