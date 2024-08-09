import React, { useState, useEffect } from 'react';

const AnimatedText = ({ text, onComplete }) => {
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
        let currentChar = 0;
        const intervalId = setInterval(() => {
            if (currentChar < (text.length - 1)) {
                setDisplayText((prev) => prev + text[currentChar]);
                currentChar += 1;
            } else {
                clearInterval(intervalId);
                if (onComplete) {
                    onComplete();
                }
            }
        }, 50);

        return () => clearInterval(intervalId);
    }, [text, onComplete]);

    return <p dangerouslySetInnerHTML={{ __html: displayText }} />
    //     return <p>{displayText}</p>;
};

export default AnimatedText;
