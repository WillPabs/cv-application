import React from "react";

export class Education extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.id,
            schoolName: this.props.schoolName,
            major: this.props.major,
            dateOfStudy: this.props.dateOfStudy,
            isEditing: this.props.isEditing
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
        const { id, schoolName, major, dateOfStudy, isEditing } = this.state;
        if (isEditing) {
            return (
                <form id={id} onSubmit={this.props.deleteExperience}>
                    <input
                        type="text"
                        id="schoolName"
                        placeholder="School Name"
                        value={schoolName}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        id="major"
                        placeholder="Major"
                        value={major}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        id="dateOfStudy"
                        placeholder="Date of Study"
                        value={dateOfStudy}
                        onChange={this.handleChange}
                    />
                    <button className="button-edit" onClick={this.handleSubmit}>Resubmit</button>
                    <button className="button-delete" type="submit">Delete Experience</button>
                </form>
            );
        } else {
            return (
                <div>
                    <div>{schoolName}</div>
                    <div>{major}</div>
                    <div>{dateOfStudy}</div>
                    <button className="button-edit" onClick={this.handleEdit}>Edit</button>
                </div>
            );
        }
    };
};