import React, { useState } from "react";

const MultipleChoiceQuestion = ({ question, choices, setChoice }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerSelection = (choice) => {
    setSelectedAnswer(choice);
  };

  return (
    <div>
      <h3>{question}</h3>
      <ul>
        {choices.map((choice, index) => (
          <div key={index} style={{ display: 'block', marginBottom: '10px', textAlign: 'left' }}>
            <label>
              <input
                type="radio"
                name="answer"
                value={choice}
                checked={selectedAnswer === choice}
                onChange={() => handleAnswerSelection(choice)}
              />
              {choice}
            </label>
          </div>
        ))}
      </ul>
      <p>Selected Answer: {selectedAnswer}</p>
    </div>
  );
};

export default MultipleChoiceQuestion;
