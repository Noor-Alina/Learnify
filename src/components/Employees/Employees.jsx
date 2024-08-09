import React, { useEffect, useState } from "react";
import "./Employees.scss"; // Optional: for styling
import dataObject from "../../data/employees.json";

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
                <h1 className="employees-title">Employees</h1>
                <p className="example-text">Example </p>
                <img
                    src="src/assets/images/static.png"
                    alt="Employees"
                    className="employees-image"
                />
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
                                                    : "disabled"
                                            }`}
                                            onClick={() =>
                                                handleQuestionClick(option.id)
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
                                                        : "disabled"
                                                }`}
                                                onClick={() =>
                                                    handleFollowUpClick(
                                                        option.id
                                                    )
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
