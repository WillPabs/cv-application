import React from "react";
import { useState } from "react";

export const Task = (props) => {
    const [id, setId] = useState(props.id);
    const [text, setText] = useState(props.text);
    const [isEditing, setIsEditing] = useState(props.isEditing);

    let { tasks } = props;

    const handleChange = (e) => {
        const value = e.target.value;
        let taskIndex = tasks.findIndex(t => t.id === id);
        tasks[taskIndex].text = value;
        setText(value)
    }

    if (isEditing) {
        return (
            <div id={`${id}`}>
                <textarea 
                    id="text"
                    rows="2" 
                    cols="20"
                    placeholder="Enter Task"
                    value={text}
                    onChange={handleChange}
                />
                <button className="button-delete" type="button" onClick={props.deleteTask}>Delete Task</button>
            </div>
        )
    } else {
        return (
            <li id={id}>
                {text}
            </li>
        )
    }
}