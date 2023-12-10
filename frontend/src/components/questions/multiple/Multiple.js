import React, { useState } from "react";

const MultipleChoiceQuestion = ({ question, choices, setChoice }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerSelection = (choice) => {
    setSelectedAnswer(choice);
    setChoice(choice);
  };

  return (
    <div>
      <h3>{question}</h3>
      <ul>
        {choices.map((choice, index) => (
          <li key={index}>
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
          </li>
        ))}
      </ul>
      <p>Selected Answer: {selectedAnswer}</p>
    </div>
  );
};

export default MultipleChoiceQuestion;
