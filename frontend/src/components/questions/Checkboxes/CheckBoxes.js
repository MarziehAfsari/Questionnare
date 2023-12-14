import React, { useState } from 'react';

const CheckboxQuestion = ({ question, choices, onAnswerSubmit }) => {
  const [selectedChoices, setSelectedChoices] = useState([]);

  const handleChoiceChange = (choice) => {
    const isSelected = selectedChoices.includes(choice);

    if (isSelected) {
      // If the choice is already selected, remove it
      setSelectedChoices(selectedChoices.filter((c) => c !== choice));
    } else {
      // If the choice is not selected, add it
      setSelectedChoices([...selectedChoices, choice]);
    }
  };


  return (
    <div>
      <p>{question}</p>
      {choices.map((choice, index) => (
        <div key={index}>
          <label>
            <input
              type="checkbox"
              value={choice}
              checked={selectedChoices.includes(choice)}
              onChange={() => handleChoiceChange(choice)}
            />
            {choice}
          </label>
        </div>
      ))}
    </div>
  );
};

export default CheckboxQuestion;
