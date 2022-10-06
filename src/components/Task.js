import React from "react";

export class Task extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.id,
            text: this.props.text,
            isEditing: this.props.isEditing
        }
    }

    handleChange = (e) => {
        const property = e.target.id;
        const value = e.target.value;
        this.setState({
            [property]: value
        })

        this.props.onTaskChange(value)
        // console.log(property)
        // console.log(value)
    }

    editTask = (e) => {
        e.preventDefault();
        this.setState({
            isEditing: true
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
        this.setState({
            id: this.state.id,
            text: this.state.text,
            isEditing: false,
        })
    }

    render() {
        const { id, text, isEditing } = this.state
        if (isEditing) {
            return (
                <div id={`${id}`}>
                    <textarea 
                        id="text"
                        rows="5" 
                        cols="50"
                        placeholder="Enter Task"
                        value={text}
                        onChange={this.handleChange}
                    />
                    <button className="button-edit" type="button" onClick={this.handleSubmit}>Submit</button>
                    <button className="button-delete" type="button" onClick={this.props.deleteTask.bind(this)}>Delete Task</button>
                </div>
            )
        } else {
            return (
                <li id={id}>
                    {text}
                    <button className="button-edit" type="button" onClick={this.editTask}>Edit</button>
                    <button className="button-delete" type="submit" onClick={this.props.deleteTask}>Delete Task</button>
                </li>
            )
        }
    }
}