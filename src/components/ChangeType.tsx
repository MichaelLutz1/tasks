import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [questionType, setQuestionType] = useState<QuestionType>(
        "short_answer_question"
    );
    const changeQuestionType = () => {
        const newType: QuestionType =
            questionType === "short_answer_question"
                ? "multiple_choice_question"
                : "short_answer_question";

        setQuestionType(newType);
    };
    return (
        <div>
            <Button onClick={changeQuestionType}>Change Type</Button>
            <p>
                {questionType === "short_answer_question"
                    ? "Short Answer"
                    : "Multiple Choice"}
            </p>
        </div>
    );
}
