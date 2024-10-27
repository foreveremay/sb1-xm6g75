import { Question } from '../types';

export const questions: Question[] = [
  {
    id: 'A',
    text: '新娘養過什麼寵物',
    options: ['藏獒', '臘腸狗', '鸚鵡', '麝香豬'],
    correctAnswers: [1, 3],
    isMultiSelect: true
  },
  {
    id: 'B',
    text: '新娘大學念甚麼科系',
    options: ['幼保系', '財金系', '營養系', '哲學系'],
    correctAnswers: [2]
  },
  {
    id: 'C',
    text: '新娘的結婚對象',
    options: ['吉利哥', '雅德思土地公', '襯衫哥', '西裝哥'],
    correctAnswers: [1, 3],
    isMultiSelect: true
  },
  {
    id: 'D',
    text: '今天用餐是哪家餐廳',
    options: ['foldie', '典華', '不葷主義', '養心茶樓'],
    correctAnswers: [0]
  },
  {
    id: 'E',
    text: '新郎減重幾公斤',
    options: ['0公斤', '3公斤', '5公斤', '10公斤'],
    correctAnswers: [2]
  }
];