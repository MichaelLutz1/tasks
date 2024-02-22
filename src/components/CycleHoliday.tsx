import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("Christmas");
    type Holiday =
        | "Christmas"
        | "Thanksgiving"
        | "Easter"
        | "New Years"
        | "Halloween";
    const alphabeticOrder: Record<Holiday, Holiday> = {
        Christmas: "Easter",
        Easter: "Halloween",
        Halloween: "New Years",
        "New Years": "Thanksgiving",
        Thanksgiving: "Christmas"
    };
    const yearOrder: Record<Holiday, Holiday> = {
        "New Years": "Easter",
        Easter: "Thanksgiving",
        Thanksgiving: "Halloween",
        Halloween: "Christmas",
        Christmas: "New Years"
    };
    const holidayEmoji: Record<Holiday, string> = {
        "New Years": "🎉",
        Easter: "🐰",
        Thanksgiving: "🦃",
        Halloween: "🎃",
        Christmas: "🎄"
    };
    return (
        <div>
            Cycle Holiday
            <p>Holiday: {holidayEmoji[holiday]}</p>
            <Button onClick={() => setHoliday(alphabeticOrder[holiday])}>
                Cycle by Alphabet
            </Button>
            <Button onClick={() => setHoliday(yearOrder[holiday])}>
                Cycle by Date of Year
            </Button>
        </div>
    );
}
