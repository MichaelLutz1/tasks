import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState(3);
    const [attemptsRequested, setAttemptsRequested] = useState(0);
    const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newAttemptsRequested = parseInt(e.target.value);
        if (isNaN(newAttemptsRequested)) {
            return;
        }
        setAttemptsRequested(newAttemptsRequested);
    };
    return (
        <div>
            <h3>{attempts}</h3>
            <Form.Control
                type="number"
                placeholder="Enter attempts"
                value={attemptsRequested}
                onChange={handleChanges}
            />
            <Button
                onClick={() => {
                    setAttempts(attempts + attemptsRequested);
                }}
            >
                gain
            </Button>
            <Button
                onClick={() => {
                    setAttempts(attempts - 1);
                }}
                disabled={attempts === 0}
            >
                use
            </Button>

            <h3>Give Attempts</h3>
        </div>
    );
}
