import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [chosenAnswer, setChosenAnswer] = useState<string>(options[0]);
    return (
        <div>
            <Form.Group controlId="formAnswer">
                <Form.Label>Choose the correct answer:</Form.Label>
                <Form.Select
                    value={chosenAnswer}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                        setChosenAnswer(e.target.value);
                    }}
                >
                    {options.map((option: string) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <h3>{chosenAnswer === expectedAnswer ? "✔️" : "❌"}</h3>
            <h3>Multiple Choice Question</h3>
        </div>
    );
}
