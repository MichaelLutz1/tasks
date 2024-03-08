import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState(false);
    const [name, setName] = useState("Your Name");
    const [isStudent, setIsStudent] = useState(true);
    return (
        <div>
            <Form.Check
                type="switch"
                id="edit-mode-switch"
                label="Edit Mode"
                checked={editMode}
                onChange={(e) => setEditMode(e.target.checked)}
            />
            {editMode ? (
                <>
                    <Form.Control
                        type="text"
                        id="name-input"
                        placeholder="Enter name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        disabled={!editMode}
                    />
                    <Form.Check
                        type="checkbox"
                        id="student-checkbox"
                        label="Are you a student?"
                        checked={isStudent}
                        onChange={(e) => setIsStudent(e.target.checked)}
                        disabled={!editMode}
                    />
                </>
            ) : null}
            <h3>
                {name} is {isStudent ? "" : "not"} a student
            </h3>

            <h3>Edit Mode</h3>
        </div>
    );
}
