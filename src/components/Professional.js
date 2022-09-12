import React from "react";

export class Professional extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            companyName: this.props.companyName,
            positionTitle: this.props.positionTitle,
            tasks: this.props.tasks,
            dateStarted: this.props.dateStarted,
            dateEnded: this.props.dateEnded,
            isEditing: false,
        }
    };

    handleChange = (e) => {
        const property = e.target.id;
        const value = e.target.value;
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
    }

    render() {
        const { companyName, positionTitle, tasks, dateStarted, dateEnded, isEditing } = this.state;
        const heading = <div>Professional Experience</div>;
        if (isEditing) {
            return(
                <form onSubmit={this.handleSubmit}>
                    {heading}
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
                    <button>Resubmit</button>
                </form>
            );
        } else {
            return(
                <div>
                    {heading}
                    <div>{companyName}</div>
                    <div>{positionTitle}</div>
                    <div>{tasks}</div>
                    <div>{dateStarted}</div>
                    <div>{dateEnded}</div>
                    <button onClick={this.handleEdit}>Edit</button>
                </div>
            );
        }
    };
};