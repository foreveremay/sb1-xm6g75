export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswers: number[];
  isMultiSelect?: boolean;
}

export interface GameState {
  currentQuestionIndex: number;
  selectedAnswers: number[];
  showAnswer: boolean;
}