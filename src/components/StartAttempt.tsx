import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [inProgress, setInProgress] = useState<boolean>(false);
    const startQuiz = () => {
        setInProgress(true);
        setAttempts(attempts - 1);
    };
    const stopQuiz = () => {
        setInProgress(false);
    };
    const addMulligan = () => {
        setAttempts(attempts + 1);
    };
    return (
        <div>
            <p>Attempts: {attempts}</p>
            <Button onClick={startQuiz} disabled={inProgress || attempts === 0}>
                Start Quiz
            </Button>
            <Button onClick={stopQuiz} disabled={!inProgress}>
                Stop Quiz
            </Button>
            <Button onClick={addMulligan} disabled={inProgress}>
                Mulligan
            </Button>
        </div>
    );
}