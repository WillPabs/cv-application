import React from "react";
import uniqid from "uniqid";
import { Task } from "./Task";

export class Tasks extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            tasks: [],
            task: {
                id: uniqid(),
                text: '',
                isEditing: this.props.isEditing
            }
        }
    }

    addTask = () => {
        this.setState({
            tasks: [...this.state.tasks, this.state.task],
            task: {
                id: uniqid(),
                text: '',
                isEditing: true
            }   
        })
    }

    deleteExperience = (e) => {
        e.preventDefault();
        const id = e.target.id;
        this.setState({
            tasks: this.state.tasks.filter(task => task.id !== id)
        });
        return false;
    };

    render() {
        const { tasks } = this.state;
        if (tasks.length > 0) {
            return (
                <ul>
                    <div>Tasks</div>
                    <button className="button-add" onClick={this.addTask}>Add Task</button>
                    {tasks.map((task) => {
                        return (
                            <Task 
                                key={task.id} 
                                text={task.text}
                                isEditing={task.isEditing}
                                deleteExperience={this.deleteExperience}    
                            />
                        )
                    })}
                </ul>
            )
        } else {
            return(
                <div>
                    <div>No Tasks</div>
                    <button className="button-add" onClick={this.addTask}>Add Task</button>
                </div>
            )
        }

    }
}