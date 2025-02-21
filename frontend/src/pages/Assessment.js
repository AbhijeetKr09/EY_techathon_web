import React, { useState } from 'react';
import AssessmentNavbar from '../components/layout/Navbar';
import '../styles/Assessment.css';

const Assessment = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const questions = [
    {
      id: 1,
      question: "Which of the following sorting algorithms has the best average case time complexity?",
      type: "multiple-choice",
      options: [
        "a) Bubble Sort",
        "b) Merge Sort",
        "c) Insertion Sort",
        "d) Quick Sort"
      ]
    },
    {
      id: 2,
      question: "In the context of web development, what does the acronym CRUD stand for?",
      type: "multiple-choice",
      options: [
        "a) Copy, Read, Update, Debug",
        "b) Create, Render, Update, Deploy",
        "c) Connect, Render, Update, Display",
        "d) Create, Read, Update, Delete"
      ]
    },
    {
      id: 3,
      question: "Write Logic of Bubble sort.",
      type: "coding",
      placeholder: "#write code below this line"
    }
  ];

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleOptionSelect = (optionIndex) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestion]: optionIndex
    });
  };

  return (
    <div className="assessment">
      <AssessmentNavbar />
    
      <div className="question-card">
        <div className="question">
          {questions[currentQuestion].question}
        </div>

        {questions[currentQuestion].type === 'multiple-choice' ? (
          <div className="options-grid">
            {questions[currentQuestion].options.map((option, index) => (
              <button 
                key={index} 
                className={`option ${selectedAnswers[currentQuestion] === index ? 'selected' : ''}`}
                onClick={() => handleOptionSelect(index)}
              >
                {option}
              </button>
            ))}
          </div>
        ) : (
          <textarea 
            className="code-input"
            placeholder={questions[currentQuestion].placeholder}
          />
        )}
      </div>

      <div className="navigation">
        <div className="nav-row">
          <div className="nav-buttons">
            <button 
              className="nav-button prev"
              onClick={handlePrev}
              disabled={currentQuestion === 0}
            >
              ← Prev
            </button>

            <button 
              className="nav-button skip"
              onClick={handleNext}
              disabled={currentQuestion === questions.length - 1}
            >
              Skip →
            </button>

            <button 
              className="nav-button end-test"
            >
              End Test
            </button>
          </div>
        </div>

        <div className="nav-row">
          <div className="question-info">
            <button 
              className="nav-button quiz-info"
            >
              Quiz to test Programming language
            </button>
            
            <div className="question-progress">
              Question {currentQuestion + 1} of {questions.length}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assessment;
