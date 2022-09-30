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
                isEditing: this.props.isEditing
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
                    <button className="button-add" onClick={this.addTask}>Add Task</button>
                    {tasks.map((task) => {
                        return (
                            <Task
                                id={task.id} 
                                key={task.id} 
                                text={task.text}
                                isEditing={task.isEditing}
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
                    {/* <Task 
                        id={this.state.task.id}
                        key={this.state.task.id} 
                        text={this.state.task.text}
                        isEditing={this.state.task.isEditing}
                        deleteTask={this.deleteTask}    
                    /> */}
                    <button className="button-add" onClick={this.addTask}>Add Task</button>
                </div>
            )
        }

    }
}