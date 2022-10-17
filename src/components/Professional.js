import React from "react";
import { useState } from "react";
import uniqid from "uniqid";
import { Task } from "./Task";

export const Professional = (props) => {
    const [id, setId] = useState(props.id);
    const [companyName, setCompanyName] = useState(props.companyName);
    const [positionTitle, setPositionTitle] = useState(props.positionTitle);
    const [dateStarted, setDateStarted] = useState(props.dateStarted);
    const [dateEnded, setDateEnded] = useState(props.dateEnded);
    const [isEditing, setIsEditing] = useState(props.isEditing);
    const [tasks, setTasks] = useState(props.tasks);
    const [task, setTask] = useState(
        {
            id: uniqid(),
            text: '',
        }
    )

    const addTask = () => {
        setTasks([...tasks, task])
        setTask({
            id: uniqid(),
            text: '',
        })
    }

    const deleteTask = (e) => {
        const id = e.target.parentElement.id;
        setTasks(tasks.filter(task => task.id !== id))
    }

    const handleChange = (e) => {
        const property = e.target.id;
        const value = e.target.value;

        if (property === 'companyName') setCompanyName(value)
        else if (property === 'positionTitle') setPositionTitle(value)
        else if (property === 'dateStarted') setDateStarted(value)
        else if (property === 'dateEnded') setDateEnded(value)
    }

    const handleEdit = (e) => {
        e.preventDefault();
        setIsEditing(() => isEditing === true ? false : true)
    }

    const { deleteExperience } = props;
    const heading = tasks.length > 0 ? <div>Your Tasks</div> : <div>No Tasks</div>
    const tasksComponent = 
    <ul>
        {heading}
        {isEditing === true ? 
            <button className="button-add" type="button" onClick={addTask}>Add Task</button> : null}
        {tasks.map((task) => {
            return (
                <Task
                    id={task.id} 
                    key={task.id} 
                    text={task.text}
                    isEditing={isEditing}
                    tasks={tasks}
                    setTasks={setTasks}
                    deleteTask={deleteTask}    
                />
            )
        })}
    </ul>
    if (isEditing) {
        return(
            <form id={id} onSubmit={deleteExperience}>
                <input
                    type="text"
                    id="companyName"
                    placeholder="Company Name"
                    onChange={handleChange}
                    value={companyName}
                />
                <input 
                    type="text"
                    id="positionTitle"
                    placeholder="Position Title"
                    onChange={handleChange}
                    value={positionTitle}
                />
                <input 
                    type="text"
                    id="dateStarted"
                    placeholder="Date Started"
                    onChange={handleChange}
                    value={dateStarted}
                />
                <input 
                    type="text"
                    id="dateEnded"
                    placeholder="Date Ended"
                    onChange={handleChange}
                    value={dateEnded}
                />
                {tasksComponent}
                <button className="button-edit" type="button" onClick={handleEdit}>Submit</button>
                <button className="button-delete" type="submit">Delete Experience</button>
            </form>
        );
    } else {
        return(
            <div id={id}>
                <div>{companyName}</div>
                <div>{positionTitle}</div>
                <div>{dateStarted}</div>
                <div>{dateEnded}</div>
                {tasksComponent}
                <button className="button-edit" onClick={handleEdit}>Edit</button>
            </div>
        );
    }
}