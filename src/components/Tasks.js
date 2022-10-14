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
                isEditing: true
            }
        }
    }

    // addTask = (e) => {
    //     e.preventDefault();
    //     this.props.onAddTask(this.state.task)
    //     this.setState({
    //         tasks: [...this.state.tasks, this.state.task],
    //         task: {
    //             id: uniqid(),
    //             text: '',
    //             isEditing: true
    //         }   
    //     })
    // }

    handleTaskChange = (e) => {
        const value = e.target.value;
        console.log(this.state)
        // this.props.onTaskChange(this.state)
        // this.setState({
        //     task: {
        //         id: this.state.task.id,
        //         text: value,
        //         isEditing: this.state.task.isEditing
        //     }
        // })
    }

    // deleteTask = (e) => {
    //     const id = e.target.parentElement.id;
    //     this.setState({
    //         tasks: this.state.tasks.filter(task => task.id !== id)
    //     });
    // };

    render() {
        const { tasks } = this.props;
        const heading = tasks ? <div>Your Tasks</div> : <div>No Tasks</div>
        console.log(this.state)
        console.log(this.props)
        return(
            <ul>
                {heading}
                <button className="button-add" type="button" onClick={this.props.addTask}>Add Task</button>
                {tasks ? tasks.map((task) => {
                    return (
                        <Task
                            id={task.id} 
                            key={task.id} 
                            text={task.text}
                            isEditing={task.isEditing}
                            onTaskChange={this.props.onTaskChange}
                            onTaskSubmit={this.props.onTaskSubmit}
                            deleteTask={this.props.onDeleteTask}    
                        />
                    )
                }) : 
                    <Task
                        id={this.props.task.id} 
                        key={this.props.task.id} 
                        text={this.props.task.text}
                        isEditing={this.props.task.isEditing}
                        onTaskChange={this.props.onTaskChange}
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