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
                text: ''
            }
        }
    }

    render() {
        const { tasks } = this.state;
        return (
            <ul>
                {tasks.map((task) => {
                    return (
                        <Task text={task.text}/>
                    )
                })}
            </ul>
        )
    }
}