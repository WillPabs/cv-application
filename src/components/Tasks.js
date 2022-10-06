import React from "react";
import uniqid from "uniqid";
import { Task } from "./Task";

export class Tasks extends React.Component {
    constructor(props) {
        super(props)
        // this.onTaskChange = this.props.onTaskChange.bind(this);

        this.state = {
            tasks: this.props.tasks,
            task: {
                id: uniqid(),
                text: '',
                isEditing: true
            }
        }
    }

    addTask = (e) => {
        e.preventDefault();
        console.log(e.target.elements)
        this.setState({
            tasks: [...this.state.tasks, this.state.task],
            task: {
                id: uniqid(),
                text: '',
                isEditing: true
            }   
        })
    }

    deleteTask = (e) => {
        const id = e.target.parentElement.id;
        this.setState({
            tasks: this.state.tasks.filter(task => task.id !== id)
        });
    };

    render() {
        const { tasks } = this.state;
        console.log(tasks)
        if (tasks.length > 0) {
            return (
                <div>
                    <div>Your Tasks</div>
                    <button className="button-add" onClick={this.props.addTask}>Add Task</button>
                    {tasks.map((task) => {
                        return (
                            <Task
                                id={task.id} 
                                key={task.id} 
                                text={task.text}
                                isEditing={task.isEditing}
                                onTaskChange={this.props.onTaskChange}
                                deleteTask={this.deleteTask}    
                            />
                        )
                    })}
                </div>
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