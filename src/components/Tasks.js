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
        this.props.onAddTask(this.state.task)
        this.setState({
            tasks: [...this.state.tasks, this.state.task],
            task: {
                id: uniqid(),
                text: '',
                isEditing: true
            }   
        })
    }

    handleTaskChange = (e) => {
        const value = e.target.value;
        this.setState({
            task: {
                id: this.state.id,
                text: value,
                isEditing: this.state.isEditing
            }
        })
    }

    // deleteTask = (e) => {
    //     const id = e.target.parentElement.id;
    //     this.setState({
    //         tasks: this.state.tasks.filter(task => task.id !== id)
    //     });
    // };

    render() {
        const { tasks } = this.props;
        const heading = tasks.length > 0 ? <div>Your Tasks</div> : <div>No Tasks</div>
        console.log(tasks)
        return(
            <ul>
                {heading}
                <button className="button-add" onClick={this.addTask}>Add Task</button>
                {tasks.length > 0 ? tasks.map((task) => {
                    return (
                        <Task
                            id={task.id} 
                            key={task.id} 
                            text={task.text}
                            isEditing={task.isEditing}
                            onTaskChange={this.handleTaskChange}
                            onTaskSubmit={this.props.onTaskSubmit}
                            deleteTask={this.props.onDeleteTask}    
                        />
                    )
                }) : 
                    <Task
                        id={this.state.task.id} 
                        key={this.state.task.id} 
                        text={this.state.task.text}
                        isEditing={this.props.task.isEditing}
                        onTaskChange={this.handleTaskChange}
                        onTaskSubmit={this.props.onTaskSubmit}
                        deleteTask={this.props.onDeleteTask} 
                    />
                }
            </ul>
        )



        if (tasks.length > 0) {
            return (
                <ul>
                    <div>Your Tasks</div>
                    <button className="button-add" onClick={this.props.onAddTask}>Add Task</button>
                    {tasks.map((task) => {
                        return (
                            <Task
                            id={task.id} 
                            key={task.id} 
                            text={task.text}
                            isEditing={task.isEditing}
                            onTaskSubmit={this.props.onTaskSubmit}
                            deleteTask={this.props.onDeleteTask}    
                            />
                        )
                    })}
                </ul>
            )
        } else {
            return(
                <div>
                    <div>No Tasks</div>
                    <button className="button-add" onClick={this.props.onAddTask}>Add Task</button>
                </div>
            )
        }

    }
}