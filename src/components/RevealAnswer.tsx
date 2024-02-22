import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);
    return (
        <div>
            <p>{visible ? "42" : ""}</p>
            <Button onClick={() => setVisible(!visible)}>Reveal Answer</Button>
        </div>
    );
}
