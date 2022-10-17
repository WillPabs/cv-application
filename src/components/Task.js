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
        const id = this.props.id;
        const taskIndex = this.props.tasks.findIndex(t => t.id === id);
        this.props.tasks[taskIndex].text = value;
        this.setState({
            [property]: value,
        })
    }

    render() {
        const { id, text, isEditing } = this.state
        if (isEditing) {
            return (
                <div id={`${id}`}>
                    <textarea 
                        id="text"
                        rows="2" 
                        cols="20"
                        placeholder="Enter Task"
                        value={text}
                        onChange={this.handleChange}
                    />
                    <button className="button-delete" type="button" onClick={this.props.deleteTask}>Delete Task</button>
                </div>
            )
        } else {
            return (
                <li id={id}>
                    {text}
                    {/* <button className="button-delete" type="submit" onClick={this.props.deleteTask}>Delete Task</button> */}
                </li>
            )
        }
    }
}