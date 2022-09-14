import React from "react";

export class Professional extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            experiences: this.props.experiences,
            id: '',
            companyName: '',
            positionTitle: '',
            tasks: '',
            dateStarted: '',
            dateEnded: '',
            isEditing: true,
        }
    };

    updateObjInArray = (e) => {
        const property = e.target.id;
        const value = e.target.value;
        this.setState(current => {
            current.map(obj => {
                return {...obj, [property]: value};
            });
        });
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

    handleEdit = () => {
        this.setState({
            isEditing: this.state.isEditing === true ? false : true
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.handleEdit();
        console.log(this.state)
        this.props.experiences = [...this.props.experiences, 
                {
                    id: this.state.id,
                    companyName: this.state.companyName,
                    positionTitle: this.state.positionTitle,
                    tasks: this.state.tasks,
                    dateStarted: this.state.dateStarted,
                    dateEnded: this.state.dateEnded,
                    isEditing: false,
                }
            ]

    }

    render() {
        const { experiences } = this.props;
        console.log(experiences)
        const heading = <div>Professional Experience</div>;
        const { addExperience } = this.props;
        return (
            <ul>
                {heading}
                {experiences.map((experience, i) => {
                    const { id, companyName, positionTitle, tasks, dateStarted, dateEnded, isEditing } = experience;
                
                    if (isEditing) {
                        // const { id, companyName, positionTitle, tasks, dateStarted, dateEnded, isEditing } = this.state;
                        return(
                            <form key={i} id={id} onSubmit={this.handleSubmit}>
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
                                <button>Submit</button>
                            </form>
                        );
                    } else {
                        return(
                            <div key={id} id={id}>
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
                })}
                <button onClick={addExperience}>Add Experience</button>
            </ul>
        )
    };
};