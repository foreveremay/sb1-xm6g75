import React from 'react';
import { Question } from '../types';
import { CheckCircle2, XCircle } from 'lucide-react';

interface QuestionCardProps {
  question: Question;
  selectedAnswers: number[];
  showAnswer: boolean;
  onAnswerSelect: (index: number) => void;
  onSubmit: () => void;
}

export function QuestionCard({
  question,
  selectedAnswers,
  showAnswer,
  onAnswerSelect,
  onSubmit,
}: QuestionCardProps) {
  const isCorrect = showAnswer && question.correctAnswers.some(answer => 
    selectedAnswers.includes(answer));

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 transition-all">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-800">
            {question.id}. {question.text}
          </h2>
          {showAnswer && (
            <div className="flex items-center">
              {isCorrect ? (
                <CheckCircle2 className="w-8 h-8 text-green-500" />
              ) : (
                <XCircle className="w-8 h-8 text-red-500" />
              )}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => onAnswerSelect(index)}
              disabled={showAnswer}
              className={`
                p-4 rounded-lg text-left transition-all
                ${selectedAnswers.includes(index)
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}
                ${showAnswer && question.correctAnswers.includes(index)
                  ? 'ring-2 ring-green-500'
                  : ''}
                disabled:cursor-not-allowed
              `}
            >
              {option}
            </button>
          ))}
        </div>

        {!showAnswer && (
          <button
            onClick={onSubmit}
            className="w-full py-3 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            確認答案
          </button>
        )}
      </div>
    </div>
  );
}