import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [dOne, setDieOne] = useState<number>(1);
    const [dTwo, setDieTwo] = useState<number>(6);
    return (
        <div>
            Two Dice
            <div>
                <span data-testid="left-die">{dOne}</span>
                <span data-testid="right-die">{dTwo}</span>
            </div>
            <Button onClick={() => setDieOne(d6())}>Roll Left</Button>
            <Button onClick={() => setDieTwo(d6())}>Roll Right</Button>
            <p>
                {dOne === 1 && dTwo === 1 ? "Lose" : dOne === dTwo ? "Win" : ""}
            </p>
        </div>
    );
}
