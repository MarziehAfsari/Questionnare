import React from "react";
import { useState } from "react";
import QuestionBox from "../components/questions/AnswerBox/AnswerBox.js";
import { Link } from 'react-router-dom';

const About = () => {
  const containerStyle = {
    // Layout
    display: 'flex',
    flexDirection: 'column', // or 'row'
    justifyContent: 'center', // 'flex-start', 'flex-end', 'space-between', 'space-around'
    alignItems: 'center', // 'flex-start', 'flex-end', 'stretch'

    // Sizing
    width: '100%', // or specify a specific width, e.g., '300px'
    height: '100vh', // or specify a specific height, e.g., '200px'

    // Spacing
    margin: '20px', // or specify different values for individual sides, e.g., '10px 20px'
    padding: '20px', // or specify different values for individual sides, e.g., '10px 20px'

    // Border
    border: '1px solid #ddd',
    borderRadius: '5px',

    // Background
    backgroundColor: '#f0f0f0',

    // Text
    color: '#333',
    fontFamily: 'Arial, sans-serif',
    fontSize: '16px',
    textAlign: 'center',

    // Overflow
    overflow: 'hidden', // or 'auto', 'scroll', 'visible'

    // Box Shadow
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
  };


  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    // backgroundColor: '#3498db',
    color: '#3498db',
    borderRadius: '5px',
    textDecoration: 'none',
    border: 'none',
    cursor: 'pointer',
    marginTop: '20px', 
  };

  const buttonStyle2 = {
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '5px',
    textDecoration: 'none',
    border: 'none',
    cursor: 'pointer',
  };


  const [answer, setAnswer] = useState('');
  const handleAnswer = (answer) => {
    return (answer)
  };
  return (
    <div style={containerStyle}>
      <h2>Mode Choice</h2>
      <QuestionBox
        question="How old are you?"
        onAnswerSubmit={setAnswer}
      />
      <button onClick={() => handleAnswer(answer)}  style={buttonStyle}> Submit </button>
      <Link to="/PageThree" style={buttonStyle2}>
        <button> Next  </button>
      </Link>
      <Link to="/" style={buttonStyle2}>
        <button> Back </button>
      </Link>
    </div>
  );
};

export default About;
