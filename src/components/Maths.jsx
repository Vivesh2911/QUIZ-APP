import React, { useState } from 'react';
import styles from './Maths.module.css';

export default function Maths() {
  const [questions, setQuestions] = useState([
  
      {
        question: "What is the value of π (pi) correct to two decimal places?",
        options: ["3.14", "3.16", "3.12", "3.18"],
        correctAnswer: "3.14",
        selectedAnswer: null
      },
      {
        question: "What is the result of 7 multiplied by 9?",
        options: ["63", "56", "72", "81"],
        correctAnswer: "63",
        selectedAnswer: null
      },
      {
        question: "What is the square root of 64?",
        options: ["8", "6", "10", "4"],
        correctAnswer: "8",
        selectedAnswer: null
      },
      {
        question: "What is the value of 'x' in the equation 2x + 5 = 15?",
        options: ["5", "6", "7", "8"],
        correctAnswer: "5",
        selectedAnswer: null
      },
      {
        question: "What is the result of 12 divided by 3?",
        options: ["4", "3", "6", "2"],
        correctAnswer: "4",
        selectedAnswer: null
      },
      {
        question: "What is the area of a square with a side length of 10 units?",
        options: ["100 square units", "50 square units", "25 square units", "10 square units"],
        correctAnswer: "100 square units",
        selectedAnswer: null
      },
      {
        question: "What is the sum of the interior angles of a triangle?",
        options: ["180 degrees", "90 degrees", "270 degrees", "360 degrees"],
        correctAnswer: "180 degrees",
        selectedAnswer: null
      },
      {
        question: "What is the value of 'y' in the equation 3y - 7 = 14?",
        options: ["7", "8", "9", "10"],
        correctAnswer: "7",
        selectedAnswer: null
      },
      {
        question: "What is the result of 15 minus 8?",
        options: ["7", "6", "8", "9"],
        correctAnswer: "7",
        selectedAnswer: null
      },
      {
        question: "What is the value of 'z' in the equation 4z + 3 = 27?",
        options: ["6", "7", "8", "9"],
        correctAnswer: "6",
        selectedAnswer: null
      }
    ]);
    

  const [totalMarks, setTotalMarks] = useState(0);

  function handleOptionChange(index, selectedOption) {
    const updatedQuestions = [...questions];
    updatedQuestions[index].selectedAnswer = selectedOption;
    setQuestions(updatedQuestions);
  }

  function calculateTotalMarks() {
    let marks = 0;
    questions.forEach(question => {
      if (question.selectedAnswer === question.correctAnswer) {
        marks += 2;
      }
    });
    setTotalMarks(marks);
  }

  return (
    <div>
      {questions.map((question, index) => (
        <div key={index} className={styles.output}>
          <p>{question.question}</p>
          <ul className={styles.ans}>
            {question.options.map((option, optionIndex) => (
              <li key={optionIndex}>
                <input
                  type="radio"
                  name={`question_${index}`}
                  value={option}
                  checked={question.selectedAnswer === option}
                  onChange={() => handleOptionChange(index, option)}
                />
                <label htmlFor={`question_${index}`}>{option}</label>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <button onClick={calculateTotalMarks}>Submit Answers</button>
      <p>Total Marks: {totalMarks}</p>
    </div>
  );
}
