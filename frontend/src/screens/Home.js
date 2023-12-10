import React from "react";
import { useState } from "react";
import MultipleChoiceQuestion from "../components/questions/multiple/Multiple.js";

const Home = () => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const handleAnswer = (answer) => {
    if (answer === "Paris") {
      alert("Correct!");
    } else {
      alert("Incorrect!");
    }
  };
  return (
    <div>
      <MultipleChoiceQuestion
        question="What is the capital of France?"
        choices={["Paris", "Berlin", "London", "Dublin"]}
        setChoice={setSelectedAnswer}
      />
      <button onClick={() => handleAnswer(selectedAnswer)}>Submit</button>
    </div>
  );
};

export default Home;
