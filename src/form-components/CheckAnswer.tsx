import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState("");

    return (
        <div>
            <Form.Control
                type="text"
                placeholder="Enter answer"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
            />
            <h3>{answer === expectedAnswer ? "✔️" : "❌"}</h3>
        </div>
    );
}
