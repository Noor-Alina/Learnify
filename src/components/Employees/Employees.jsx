import React, { useEffect, useState } from "react";
import "./Employees.scss"; // Optional: for styling
import dataObject from "../../data/employees.json";
import Learn from "../Learn/Learn";
import AnimatedText from "../AnimatedText/AnimatedText"; // Import the new component

const prompts = dataObject.prompts; // Array

const Employees = () => {
    const [selectedPrompt, setSelectedPrompt] = useState(null);
    const [response, setResponse] = useState("");
    const [followUp, setFollowUp] = useState([]);
    const [confirmation, setConfirmation] = useState("");
    const [followUpId, setFollowUpId] = useState(null);
    const [followUpResponse, setFollowUpResponse] = useState("");
    const [closingMessage, setClosingMessage] = useState("");
    const [explanationCompleted, setExplanationCompleted] = useState(false);

    const resetStates = () => {
        setSelectedPrompt(null);
        setResponse("");
        setFollowUpId(null);
        setFollowUpResponse("");
        setConfirmation("");
        setClosingMessage("");
        setExplanationCompleted(false);
    };

    const handleQuestionClick = (id) => {
        const promptData = prompts.find((p) => p.id === id);
        setResponse(promptData ? promptData.answer : "");
        setSelectedPrompt(id);
        setExplanationCompleted(true);

        if (promptData.confirmation) {
            setConfirmation(promptData.confirmation);
            setFollowUp(promptData.followUp);
        } else {
            setClosingMessage("Well Done! That’s how easy Generative AI is to use!");
        }
    };

    const handleFollowUpClick = (id) => {
        const followUpData = followUp.find((f) => f.id === id);
        setFollowUpId(id);
        setFollowUpResponse(followUpData ? followUpData.answer : "");
        setClosingMessage("Well Done! That’s how easy Generative AI is to use!");
    };

    return (
        <div className="employees-container">
            <div className="employees-card">
                <Learn />
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
                                            className={`question-button ${selectedPrompt === option.id
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
                        {selectedPrompt && (
                            <p className="explanation">{prompts.find((p) => p.id === selectedPrompt).explanation}</p>
                        )}
                        {explanationCompleted && (
                            <AnimatedText
                                text={response}
                            />
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
                                                className={`question-button ${followUpId === option.id
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
                        {followUpId && (
                            <p className="explanation">
                                {followUp?.find((p) => p.id === followUpId).explanation}
                            </p>
                        )}
                        {followUpResponse && (
                            <AnimatedText text={followUpResponse} />
                        )}
                    </div>
                    {closingMessage && (
                        <p className="closing-message">{closingMessage}</p>
                    )}
                </div>
                <div>
                    {closingMessage && (
                        <p className="try-again" onClick={resetStates}>
                            Try Again!
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Employees;
