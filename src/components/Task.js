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
        console.log(property)
        console.log(value)
        this.setState({
            [property]: value
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
        const { text, isEditing } = this.state
        if (isEditing) {
            return (
                <textarea 
                    id="text"
                    rows="5" 
                    cols="50"
                    placeholder="Enter Task"
                    value={text}
                    onChange={this.handleChange}
                />
            )
        } else {
            return (
                <li>
                    NOT EDITING
                    {text}
                </li>
            )
        }
    }
}