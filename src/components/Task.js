import React from "react";

export class Task extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { text } = this.props
        return (
            <textarea>
                {text}
            </textarea>
        )
    }
}