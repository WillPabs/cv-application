import React from "react";

export class Education extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            schoolName: this.props.schoolName,
            major: this.props.major,
            dateOfStudy: this.props.dateOfStudy,
            isEditing: false
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
        const { schoolName, major, dateOfStudy, isEditing } = this.state;
        const heading = <div>Educational Experience</div>;
        if (isEditing) {
            return (
                <form onSubmit={this.handleSubmit}>
                    {heading}
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
                    <button>Resubmit</button>
                </form>
            );
        } else {
            return (
                <div>
                    {heading}
                    <div>{schoolName}</div>
                    <div>{major}</div>
                    <div>{dateOfStudy}</div>
                    <button onClick={this.handleEdit}>Edit</button>
                </div>
            );
        }
    };
};