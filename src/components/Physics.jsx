import React, { useState } from 'react';
import styles from './Physics.module.css';

export default function Physics() {
  const [questions, setQuestions] = useState([
    {
      question: "What is the SI unit of force?",
      options: ["Newton", "Joule", "Watt", "Pascal"],
      correctAnswer: "Newton",
      selectedAnswer: null
    },
    {
      question: "What is the formula for calculating acceleration?",
      options: ["a = (v - u) / t", "a = (v + u) / t", "a = v * t", "a = v / t"],
      correctAnswer: "a = (v - u) / t",
      selectedAnswer: null
    },
    {
      question: "Which law states that every object will remain at rest or in uniform motion unless acted upon by an external force?",
      options: ["Newton's First Law", "Newton's Second Law", "Newton's Third Law", "Law of Gravitation"],
      correctAnswer: "Newton's First Law",
      selectedAnswer: null
    },
    {
      question: "What is the unit of electric current?",
      options: ["Ampere", "Volt", "Ohm", "Coulomb"],
      correctAnswer: "Ampere",
      selectedAnswer: null
    },
    {
      question: "What is the SI unit of power?",
      options: ["Watt", "Joule", "Newton", "Volt"],
      correctAnswer: "Watt",
      selectedAnswer: null
    },
    {
      question: "What is the law of conservation of energy?",
      options: [
        "Energy cannot be created or destroyed, only transformed or transferred",
        "Energy can be created or destroyed",
        "Energy is always conserved within a closed system",
        "Energy decreases over time"
      ],
      correctAnswer: "Energy cannot be created or destroyed, only transformed or transferred",
      selectedAnswer: null
    },
    {
      question: "What is the formula for calculating kinetic energy?",
      options: ["KE = 0.5 * m * v^2", "KE = m * g * h", "KE = m * v", "KE = F * d"],
      correctAnswer: "KE = 0.5 * m * v^2",
      selectedAnswer: null
    },
    {
      question: "What is the SI unit of work and energy?",
      options: ["Joule", "Newton", "Watt", "Coulomb"],
      correctAnswer: "Joule",
      selectedAnswer: null
    },
    {
      question: "What is the formula for calculating gravitational force?",
      options: [
        "F = G * (m1 * m2) / r^2",
        "F = m * a",
        "F = m * g",
        "F = P * A"
      ],
      correctAnswer: "F = G * (m1 * m2) / r^2",
      selectedAnswer: null
    },
    {
      question: "What is the SI unit of pressure?",
      options: ["Pascal", "Newton", "Joule", "Watt"],
      correctAnswer: "Pascal",
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
