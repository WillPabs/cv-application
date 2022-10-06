import React from "react";
import uniqid from "uniqid";
import { Tasks } from "./Tasks";

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
                isEditing: true
            }
        }
    };

    addTask = (e) => {
        e.preventDefault();
        this.setState({
            tasks: [...this.state.tasks, this.state.task],
            task: {
                id: uniqid(),
                text: '',
                isEditing: true
            }   
        })
    }

    handleChange = (e) => {
        const property = e.target.id;
        const value = e.target.value;
        console.log(property)
        console.log(value)
        this.setState({
            [property]: value
        })
    }

    handleTaskChange = (text) => {
        this.setState({
            task: text
        })
    }

    handleEdit = () => {
        this.setState({
            isEditing: this.state.isEditing === true ? false : true
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.handleEdit();
        console.log(this.state)
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
        const { id, companyName, positionTitle, dateStarted, dateEnded, isEditing } = this.state;
        const { deleteExperience } = this.props;
        const tasks = <Tasks tasks={this.state.tasks} onAddTask={this.addTask} isEditing={isEditing} onTaskChange={this.handleTaskChange}/>;
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
                    {tasks}
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
                    {tasks}
                    <button className="button-edit" onClick={this.handleEdit}>Edit</button>
                </div>
            );
        }
    }
};