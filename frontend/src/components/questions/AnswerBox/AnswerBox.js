import React, { useState } from 'react';

const QuestionBox = ({ question, onAnswerSubmit }) => {
  const [answer, setAnswer] = useState('');

  const handleAnswerChange = (event) => {
    setAnswer(event.target.value);
  };

  return (
    <div>
      <p>{question}</p>
      <input
        type="text"
        value={answer}
        onChange={handleAnswerChange}
        placeholder="Type your answer here..."
      />
    </div>
  );
};

export default QuestionBox;
