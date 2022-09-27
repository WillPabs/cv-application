import React from "react";
import uniqid from "uniqid";
import { Task } from "./Task";

export class Tasks extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            tasks: this.props.tasks,
            task: {
                id: uniqid(),
                text: '',
                isEditing: this.props.isEditing
            }
        }
    }

    addTask = () => {
        this.setState({
            tasks: [...this.state.tasks, this.state.task]   
        })
    }

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
                            />
                        )
                    })}
                </ul>
            )
        } else {
            return(
                <div>
                    <div>Tasks</div>
                    <button className="button-add" onClick={this.addTask}>Add Task</button>
                </div>
            )
        }

    }
}