import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState("black");
    const colors = [
        "black",
        "red",
        "green",
        "blue",
        "yellow",
        "purple",
        "orange",
        "pink"
    ];
    return (
        <div>
            {colors.map((c) => (
                <Form.Check
                    type="radio"
                    key={c}
                    id={`color-${c}`}
                    label={c}
                    checked={color === c}
                    onChange={() => setColor(c)}
                    style={{ backgroundColor: c }}
                    value={c}
                    inline
                />
            ))}
            <h3>Change Color</h3>
            <div>
                you have chosen
                <div
                    data-testid="colored-box"
                    style={{ backgroundColor: `${color}` }}
                >
                    {color}
                </div>
            </div>
        </div>
    );
}
