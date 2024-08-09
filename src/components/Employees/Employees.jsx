import React, { useState } from 'react';
import './Employees.scss'; // Optional: for styling
import dataObject from "../../data/employees.json";

const prompts = dataObject.prompts; //array

const mockData = {
  questions: [
    { id: 'Q1', question: 'Give me a summary of what happened in the 3rd chapter of the book ‘To Kill a Mocking Bird’?', response: 'In Chapter 3 of "To Kill a Mockingbird," Scout faces difficulties at school with her teacher and learns about social inequalities through her interactions with Walter Cunningham. Her father, Atticus, reinforces the importance of empathy and understanding others' },
    { id: 'Q2', question: 'What is the slope and intercept for y=2x+3 and how would you graph it?', response: 'The slope is 2 and the intercept is 3. Graph the line by plotting the point (0, 3) and using the slope to find another point, then draw a straight line through them.' },
    { id: 'Q3', question: 'Explain the concept of photosynthesis.', response: 'Photosynthesis is the process by which plants convert light energy into chemical energy, turning carbon dioxide and water into glucose and oxygen. This occurs in the chloroplasts of plant cells using sunlight' },
    { id: 'Q4', question: 'what is Artificial Intelligence?', response: 'AI is the simulation of human intelligence in machines to perform tasks like learning and problem-solving.' },
  ],
};

const Employees = () => {
  const [selectedPrompt, setSelectedPrompt] = useState(null);
  const [response, setResponse] = useState('');
  const [followUp, setFollowUP] = useState(null);
  const [confirmation, setConfirmation] = useState('');
  const [followUpId, setFollowUpId] = useState(null);

  const handleQuestionClick = (id) => {
    const promptData = prompts.find((p) => p.id === id);
    setResponse(promptData ? promptData.answer : '');
    setSelectedPrompt(id);

    //continue for if it has follow ups
    if (promptData.confirmation) {
      setConfirmation(promptData.confirmation);
      setFollowUP(promptData.followUp);
    }
  };

  // const handleFollowUpClick = (followUpId) => {
    
  // }

  /*
  
  */

  return (
    <div className="employees-container">
      <div className="employees-card">
        <h1 className="employees-title">Employees</h1>
        <p className="example-text">Example </p>
        <img
          src="src/assets/images/static.png"
          alt="Employees"
          className="employees-image"
        />
        <div className="prompt-response">
          <p className="prompt-info">choose a prompt question to see the response: </p>
          <table className="questions-table">
            <tbody>
              {prompts.map((option) => (
                <tr key={option.id}>
                  <td>
                    <button
                      className={`question-button ${selectedPrompt === option.id ? 'selected' : 'disabled'}`}
                      onClick={() => handleQuestionClick(option.id)}
                    >
                      {option.question}
                    </button>
                  </td>
                </tr>
              ))}
              
            </tbody>
          </table>
          <div className="response-section">
            {response && <p className="response-text">{response}</p>}
          </div>
          {/* {confirmation && <p>{confirmation}</p>} */}
          
          {/* <table>
            <tbody>
              {selectedPrompt && followUp.map((option)=>(
                <tr key={option.id}>
                </tr>
              ))}
            </tbody>
          </table> */}
          
        </div>
      </div>
    </div>
  );
};

export default Employees;
