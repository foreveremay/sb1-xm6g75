import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';
import { Question } from '../data/questions';

interface AnswerRevealProps {
  question: Question;
  selectedAnswers: number[];
}

const AnswerReveal: React.FC<AnswerRevealProps> = ({ question, selectedAnswers }) => {
  const isCorrect = question.multiSelect
    ? selectedAnswers.some(answer => question.correctAnswers.includes(answer))
    : question.correctAnswers[0] === selectedAnswers[0];

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <div className="flex items-center justify-center mb-6">
        {isCorrect ? (
          <div className="flex items-center gap-2 text-green-500">
            <CheckCircle className="w-8 h-8" />
            <span className="text-2xl font-bold">答對了！</span>
          </div>
        ) : (
          <div className="flex items-center gap-2 text-red-500">
            <XCircle className="w-8 h-8" />
            <span className="text-2xl font-bold">答錯了！</span>
          </div>
        )}
      </div>

      <h2 className="text-xl font-bold text-gray-800 mb-4">{question.text}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {question.answers.map((answer, index) => (
          <div
            key={index}
            className={`p-4 rounded-xl ${
              question.correctAnswers.includes(index)
                ? 'bg-green-100 border-2 border-green-500'
                : selectedAnswers.includes(index) && !question.correctAnswers.includes(index)
                ? 'bg-red-100 border-2 border-red-500'
                : 'bg-gray-50 border-2 border-transparent'
            }`}
          >
            <span className="text-lg font-medium text-gray-700">{answer}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnswerReveal;