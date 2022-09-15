import React from "react";

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
        }
    };

    handleChange = (e) => {
        const property = e.target.id;
        const value = e.target.value;
        console.log(property)
        console.log(value)
        this.setState({
            [property]: value
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
        const { id, companyName, positionTitle, tasks, dateStarted, dateEnded, isEditing } = this.state;
        const { deleteExperience } = this.props;
        if (isEditing) {
            return(
                <form key={id} id={id} onSubmit={deleteExperience}>
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
                        id="tasks"
                        placeholder="Tasks"
                        onChange={this.handleChange}
                        value={tasks}
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
                    <button type="button" onClick={this.handleSubmit}>Submit</button>
                    <button type="submit">Delete Experience</button>
                </form>
            );
        } else {
            return(
                <div key={id} id={id}>
                    <div>{companyName}</div>
                    <div>{positionTitle}</div>
                    <div>{tasks}</div>
                    <div>{dateStarted}</div>
                    <div>{dateEnded}</div>
                    <button onClick={this.handleEdit}>Edit</button>
                </div>
            );
        }
    }
};