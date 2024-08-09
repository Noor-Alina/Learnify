import React, { useEffect, useState } from "react";
import "./Employees.scss"; // Optional: for styling
import dataObject from "../../data/employees.json";
import Learn from "../Learn/Learn";

const prompts = dataObject.prompts; //array

const Employees = () => {
    const [selectedPrompt, setSelectedPrompt] = useState(null);
    const [response, setResponse] = useState("");
    const [followUp, setFollowUp] = useState([]);
    const [confirmation, setConfirmation] = useState("");
    const [followUpId, setFollowUpId] = useState(null);
    const [followUpResponse, setFollowUpResponse] = useState("");
    const [closingMessage, setClosingMessage] = useState("");

    const handleQuestionClick = (id) => {
        const promptData = prompts.find((p) => p.id === id);
        setResponse(promptData ? promptData.answer : "");
        setSelectedPrompt(id);

        if (promptData.confirmation) {
            setConfirmation(promptData.confirmation);
            setFollowUp(promptData.followUp);
        } else {
            setClosingMessage("End of Chatbox");
        }
    };

    const handleFollowUpClick = (id) => {
        console.log("in handleFollowUpClick");
        const followUpData = followUp.find((f) => f.id === id);
        setFollowUp(followUpData);
        setFollowUpId(id);

        if (followUpData.answer) {
            setFollowUpResponse(followUpData.answer);
        }
        setClosingMessage("End of Chatbox");
    };

    return (
        <div className="employees-container">
            <div className="employees-card">
                <Learn/>
                {/* <h1 className="employees-title">Employees</h1>
                <div>
                    <p className="example-text">Learn </p>
                    <div>
                        <p><b>Generative artificial intelligence (AI)</b>, e.g. <b>Copilot</b>, <b>chatGPT</b>, is a type of AI that is trained on data and can generate novel content, such as text, images, music, and code. It continuously learns and refines its outputs based on user interactions</p>
                        <div>
                            <p><b>A prompt</b> is text that requests the <b>generative AI</b> to perform a specific task.</p>
                            <p>Simply, <b>enter a prompt.</b> And <b>get a response.</b></p>
                        </div>
                        <p>Examples</p>
                        <div>
                            <img src="" alt="" />
                        </div>
                    </div>
                </div> */}


                {/* <img
                    src="src/assets/images/static.png"
                    alt="Employees"
                    className="employees-image"
                /> */}

                <div className="prompt-response">
                    <p className="prompt-info">
                        choose a prompt question to see the response:{" "}
                    </p>
                    <table className="questions-table">
                        <tbody>
                            {prompts.map((option) => (
                                <tr key={option.id}>
                                    <td>
                                        <button
                                            className={`question-button ${
                                              selectedPrompt === option.id
                                                  ? "selected"
                                                  : selectedPrompt === null
                                                  ? ""
                                                  : "disabled"
                                          }`}
                                          onClick={() =>
                                            handleQuestionClick(option.id)
                                        }
                                        disabled={
                                            selectedPrompt !== null &&
                                            selectedPrompt !== option.id
                                        }
                                        >
                                            {option.question}
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="response-section">
                        {response && (
                            <p className="response-text">{response}</p>
                        )}
                    </div>
                    {confirmation && <p>{confirmation}</p>}
                    <table className="questions-table">
                        <tbody>
                            {selectedPrompt &&
                                followUp.length > 0 &&
                                followUp.map((option) => (
                                    <tr key={option.id}>
                                        <td>
                                            <button
                                                className={`question-button ${
                                                    followUpId === option.id
                                                    ? "selected"
                                                    : followUpId === null
                                                    ? ""
                                                    : "disabled"
                                                }`}
                                                onClick={() =>
                                                    handleFollowUpClick(
                                                        option.id
                                                    )
                                                }
                                                disabled={
                                                  followUpId !== null &&
                                                  followUpId !== option.id
                                              }
                                            >
                                                {option.option}
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                    <div className="response-section">
                        {followUpResponse && (
                            <p className="response-text">{followUpResponse}</p>
                        )}
                    </div>
                    {closingMessage && <p>{closingMessage}</p>}
                </div>
            </div>
        </div>
    );
};

export default Employees;
