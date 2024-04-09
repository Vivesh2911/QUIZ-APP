import React, { useState } from 'react';
import styles from './Chemistry.module.css';

export default function Chemistry() {
  const [questions, setQuestions] = useState([
  
      {
        question: "Which element has the atomic number 6?",
        options: ["Carbon", "Oxygen", "Hydrogen", "Nitrogen"],
        correctAnswer: "Carbon",
        selectedAnswer: null
      },
      {
        question: "What is the chemical symbol for gold?",
        options: ["Au", "Ag", "Fe", "Cu"],
        correctAnswer: "Au",
        selectedAnswer: null
      },
      {
        question: "What is the chemical formula for water?",
        options: ["H2O", "CO2", "NH3", "CH4"],
        correctAnswer: "H2O",
        selectedAnswer: null
      },
      {
        question: "Which gas is most abundant in Earth's atmosphere?",
        options: ["Nitrogen", "Oxygen", "Carbon dioxide", "Helium"],
        correctAnswer: "Nitrogen",
        selectedAnswer: null
      },
      {
        question: "What is the pH of a neutral solution?",
        options: ["7", "5", "10", "3"],
        correctAnswer: "7",
        selectedAnswer: null
      },
      {
        question: "Which of the following is a noble gas?",
        options: ["Helium", "Nitrogen", "Oxygen", "Carbon"],
        correctAnswer: "Helium",
        selectedAnswer: null
      },
      {
        question: "What is the chemical symbol for sodium?",
        options: ["Na", "Ni", "No", "Ne"],
        correctAnswer: "Na",
        selectedAnswer: null
      },
      {
        question: "Which metal is liquid at room temperature?",
        options: ["Mercury", "Iron", "Gold", "Copper"],
        correctAnswer: "Mercury",
        selectedAnswer: null
      },
      {
        question: "What is the chemical formula for table salt?",
        options: ["NaCl", "H2O", "CO2", "NH3"],
        correctAnswer: "NaCl",
        selectedAnswer: null
      },
      {
        question: "Which of the following is a greenhouse gas?",
        options: ["Carbon dioxide", "Oxygen", "Nitrogen", "Helium"],
        correctAnswer: "Carbon dioxide",
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
