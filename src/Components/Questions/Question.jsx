import React, { useState } from "react";

const questions = [
  {
    question:
      "What is the output of the following code? \n `console.log(typeof null);`",
    answers: [
      { text: "object", isCorrect: true },
      { text: "null", isCorrect: false },
      { text: "undefined", isCorrect: false },
      { text: "number", isCorrect: false },
    ],
  },
  {
    question: "Which of the following is a JavaScript data type?",
    answers: [
      { text: "Boolean", isCorrect: true },
      { text: "Integer", isCorrect: false },
      { text: "Decimal", isCorrect: false },
      { text: "Character", isCorrect: false },
    ],
  },
  {
    question:
      "Which method is used to convert a JSON string into a JavaScript object?",
    answers: [
      { text: "JSON.parse()", isCorrect: true },
      { text: "JSON.stringify()", isCorrect: false },
      { text: "JSON.convert()", isCorrect: false },
      { text: "JSON.toObject()", isCorrect: false },
    ],
  },
  {
    question: "What will be the result of `2 + '2'` in JavaScript?",
    answers: [
      { text: "'22'", isCorrect: true },
      { text: "4", isCorrect: false },
      { text: "NaN", isCorrect: false },
      { text: "undefined", isCorrect: false },
    ],
  },
  {
    question: "Which statement is used to handle errors in JavaScript?",
    answers: [
      { text: "try...catch", isCorrect: true },
      { text: "if...else", isCorrect: false },
      { text: "error...catch", isCorrect: false },
      { text: "throw...if", isCorrect: false },
    ],
  },
  {
    question: "What will `typeof NaN` return?",
    answers: [
      { text: "number", isCorrect: true },
      { text: "NaN", isCorrect: false },
      { text: "undefined", isCorrect: false },
      { text: "object", isCorrect: false },
    ],
  },
  {
    question:
      "Which of the following is used to create a function in JavaScript?",
    answers: [
      { text: "function", isCorrect: true },
      { text: "def", isCorrect: false },
      { text: "fun", isCorrect: false },
      { text: "create", isCorrect: false },
    ],
  },
  {
    question:
      "What is an Immediately Invoked Function Expression (IIFE) in JavaScript?",
    answers: [
      {
        text: "A function that runs as soon as it is defined",
        isCorrect: true,
      },
      {
        text: "A function that returns another function",
        isCorrect: false,
      },
      { text: "A recursive function", isCorrect: false },
      { text: "A function that cannot be called", isCorrect: false },
    ],
  },
  {
    question: "How do you declare a variable in ES6?",
    answers: [
      { text: "let", isCorrect: true },
      { text: "var", isCorrect: false },
      { text: "const", isCorrect: false },
      { text: "variable", isCorrect: false },
    ],
  },
  {
    question: "What is the purpose of the `map()` function in JavaScript?",
    answers: [
      {
        text: "To create a new array by transforming every element in an array",
        isCorrect: true,
      },
      { text: "To filter elements from an array", isCorrect: false },
      { text: "To find the length of an array", isCorrect: false },
      {
        text: "To search for an element in an array",
        isCorrect: false,
      },
    ],
  },
  {
    question: "What is the purpose of React?",
    answers: [
      { text: "To build user interfaces", isCorrect: true },
      { text: "To manage databases", isCorrect: false },
      { text: "To handle server requests", isCorrect: false },
      { text: "To style web pages", isCorrect: false },
    ],
  },
  {
    question: "Which of the following is true about React components?",
    answers: [
      {
        text: "They must start with a lowercase letter",
        isCorrect: false,
      },
      {
        text: "They can be either class-based or function-based",
        isCorrect: true,
      },
      { text: "They cannot be reused", isCorrect: false },
      { text: "They are a part of Angular.js", isCorrect: false },
    ],
  },
  {
    question:
      "How do you pass data from a parent component to a child component?",
    answers: [
      { text: "Using props", isCorrect: true },
      { text: "Using state", isCorrect: false },
      { text: "Using context", isCorrect: false },
      { text: "Using refs", isCorrect: false },
    ],
  },
  {
    question:
      "What is the correct syntax to create a stateful component in React?",
    answers: [
      {
        text: "class MyComponent extends React.Component",
        isCorrect: true,
      },
      { text: "function MyComponent() {}", isCorrect: false },
      { text: "React.createComponent()", isCorrect: false },
      { text: "function createComponent()", isCorrect: false },
    ],
  },
  {
    question: "What is JSX in React?",
    answers: [
      { text: "JavaScript XML", isCorrect: true },
      { text: "JavaScript eXtension", isCorrect: false },
      { text: "JSON XML", isCorrect: false },
      { text: "A component rendering library", isCorrect: false },
    ],
  },
  {
    question: "What hook is used to manage side effects in React?",
    answers: [
      { text: "useEffect", isCorrect: true },
      { text: "useState", isCorrect: false },
      { text: "useContext", isCorrect: false },
      { text: "useReducer", isCorrect: false },
    ],
  },
  {
    question: "Which React feature allows for state management?",
    answers: [
      { text: "State and Hooks", isCorrect: true },
      { text: "Components", isCorrect: false },
      { text: "Redux", isCorrect: false },
      { text: "Class methods", isCorrect: false },
    ],
  },
  {
    question: "How can you optimize a React application for performance?",
    answers: [
      { text: "Using React.memo", isCorrect: true },
      { text: "Using a custom hook", isCorrect: false },
      { text: "Using props", isCorrect: false },
      { text: "Using a Redux store", isCorrect: false },
    ],
  },
  {
    question: "What does the `useState` hook return?",
    answers: [
      {
        text: "An array with the current state and a function to update it",
        isCorrect: true,
      },
      {
        text: "The current state and its previous value",
        isCorrect: false,
      },
      { text: "The current state and its props", isCorrect: false },

      { text: "The state and the component's JSX", isCorrect: false },
    ],
  },
  {
    question: "How do you handle forms in React?",
    answers: [
      { text: "Using controlled components", isCorrect: true },
      { text: "Using props", isCorrect: false },
      { text: "Using states only", isCorrect: false },
      { text: "Using refs", isCorrect: false },
    ],
  },
];
function Question() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const handleAnswer = (e) => {
        if (e.target.value) {
          if (e.target.value === questions[currentQuestionIndex].answers[0].isCorrect) {
            setScore(score + 1);
          }
          setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
      };
  return (
    <div className="w-full grid grid-cols-3 gap-5 pl-[20px] pt-[20px] justify-center items-center h-[100vh]">
      {questions.map((question, index) => (
        <div
          key={index}
          className="w-[500px] h-[300px] bg-yellow flex items-center justify-center flex-col
                rounded-4xl text-white"
        >
          <h2 className="text-xl text-center">{question.question}</h2>
          <ul>
            {question.answers.map((answer, index) => (
              <li key={index}>
                <input type="radio" name={index} value={answer.isCorrect} />
                {answer.text}
              </li>
            ))}
          </ul>
        </div>
      ))}
      <button onClick={handleAnswer}>Submit</button>
    </div>
  );
}
export default Question;
