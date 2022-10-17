import React from "react";
import uniqid from "uniqid";
import { Task } from "./Task";

export class Professional extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.id,
            companyName: this.props.companyName,
            positionTitle: this.props.positionTitle,
            tasks: this.props.tasks,
            dateStarted: this.props.dateStarted,
            dateEnded: this.props.dateEnded,
            isEditing: this.props.isEditing,
            task: {
                id: uniqid(),
                text: '',
            }
        }
    };

    addTask = () => {
        this.setState({
            tasks: [...this.state.tasks, this.state.task],
            task: {
                id: uniqid(),
                text: '',
            }   
        })
    }

    deleteTask = (e) => {
        const id = e.target.parentElement.id;
        this.setState({
            tasks: this.state.tasks.filter(task => task.id !== id)
        });
    };

    handleChange = (e) => {
        const property = e.target.id;
        const value = e.target.value;
        this.setState({
            [property]: value
        })
    }

    handleEdit = () => {
        this.setState({
            isEditing: this.state.isEditing === true ? false : true
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            id: this.state.id,
            companyName: this.state.companyName,
            positionTitle: this.state.positionTitle,
            tasks: this.state.tasks,
            dateStarted: this.state.dateStarted,
            dateEnded: this.state.dateEnded,
            isEditing: false,
        })
    }

    render() {
        const { id, companyName, positionTitle, dateStarted, dateEnded, isEditing, tasks } = this.state;
        const { deleteExperience } = this.props;
        const heading = tasks.length > 0 ? <div>Your Tasks</div> : <div>No Tasks</div>
        const tasksComponent = 
        <ul>
            {heading}
            <button className="button-add" type="button" onClick={this.addTask}>Add Task</button>
            {tasks.map((task) => {
                return (
                    <Task
                        id={task.id} 
                        key={task.id} 
                        text={task.text}
                        isEditing={this.state.isEditing}
                        tasks={tasks}
                        setTasks={this.setTasks}
                        deleteTask={this.deleteTask}    
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
                        onChange={this.handleChange}
                        value={companyName}
                    />
                    <input 
                        type="text"
                        id="positionTitle"
                        placeholder="Position Title"
                        onChange={this.handleChange}
                        value={positionTitle}
                    />
                    <input 
                        type="text"
                        id="dateStarted"
                        placeholder="Date Started"
                        onChange={this.handleChange}
                        value={dateStarted}
                    />
                    <input 
                        type="text"
                        id="dateEnded"
                        placeholder="Date Ended"
                        onChange={this.handleChange}
                        value={dateEnded}
                    />
                    {tasksComponent}
                    <button className="button-edit" type="button" onClick={this.handleSubmit}>Submit</button>
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
                    <button className="button-edit" onClick={this.handleEdit}>Edit</button>
                </div>
            );
        }
    }
};