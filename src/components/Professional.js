import React from "react";

export class Professional extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            experiences: [],
            companyName: '',
            positionTitle: '',
            tasks: '',
            dateStarted: '',
            dateEnded: '',
            isEditing: true,
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
            experiences: [...this.state.experiences, 
                [
                    this.state.companyName,
                    this.state.positionTitle,
                    this.state.tasks,
                    this.state.dateStarted,
                    this.state.dateEnded,
                    this.state.isEditing
                ],
            ],
            companyName: '',
            positionTitle: '',
            tasks: '',
            dateStarted: '',
            dateEnded: '',
            isEditing: false,
            },
        )
    }

    addExperience = (e) => {
        console.log(e)
        this.setState({
          experiences: [...this.state.experiences, <Professional/>]
        });
    };

    render() {
        const { experiences } = this.state;
        console.log(experiences)
        const heading = <div>Professional Experience</div>;
        // if (experiences.length > 0) {
        //     return (
        //         <ul>
        //             {heading}
        //             {experiences.map(({ companyName, positionTitle, tasks, dateStarted, dateEnded, isEditing }, i) => {
        //                 if (isEditing) {
        //                     return(
        //                         <form key={i} onSubmit={this.handleSubmit}>
        //                             <input 
        //                                 type="text"
        //                                 id="companyName"
        //                                 placeholder="Company Name"
        //                                 onChange={this.handleChange}
        //                                 value={companyName}
        //                             />
        //                             <input 
        //                                 type="text"
        //                                 id="positionTitle"
        //                                 placeholder="Position Title"
        //                                 onChange={this.handleChange}
        //                                 value={positionTitle}
        //                             />
        //                             <input 
        //                                 type="text"
        //                                 id="tasks"
        //                                 placeholder="Tasks"
        //                                 onChange={this.handleChange}
        //                                 value={tasks}
        //                             />
        //                             <input 
        //                                 type="text"
        //                                 id="dateStarted"
        //                                 placeholder="Date Started"
        //                                 onChange={this.handleChange}
        //                                 value={dateStarted}
        //                             />
        //                             <input 
        //                                 type="text"
        //                                 id="dateEnded"
        //                                 placeholder="Date Ended"
        //                                 onChange={this.handleChange}
        //                                 value={dateEnded}
        //                             />
        //                             <button>Resubmit</button>
        //                         </form>
        //                     )
        //                 } else {
        //                     <div>
        //                         <div>Yes{companyName}</div>
        //                         <div>{positionTitle}</div>
        //                         <div>{tasks}</div>
        //                         <div>{dateStarted}</div>
        //                         <div>{dateEnded}</div>
        //                         <button onClick={this.handleEdit}>Edit</button>
        //                     </div>
        //                 }
        //             })}
        //             {/* <button onClick={this.addExperience}>Add Experience</button> */}
        //         </ul>
        //     )
        // } else {
        //     const { companyName, positionTitle, tasks, dateStarted, dateEnded, } = this.state;
        //     return (
        //         <form onSubmit={this.handleSubmit}>
        //             {heading}
        //             <input 
        //                 type="text"
        //                 id="companyName"
        //                 placeholder="Company Name"
        //                 onChange={this.handleChange}
        //                 value={companyName}
        //             />
        //             <input 
        //                 type="text"
        //                 id="positionTitle"
        //                 placeholder="Position Title"
        //                 onChange={this.handleChange}
        //                 value={positionTitle}
        //             />
        //             <input 
        //                 type="text"
        //                 id="tasks"
        //                 placeholder="Tasks"
        //                 onChange={this.handleChange}
        //                 value={tasks}
        //             />
        //             <input 
        //                 type="text"
        //                 id="dateStarted"
        //                 placeholder="Date Started"
        //                 onChange={this.handleChange}
        //                 value={dateStarted}
        //             />
        //             <input 
        //                 type="text"
        //                 id="dateEnded"
        //                 placeholder="Date Ended"
        //                 onChange={this.handleChange}
        //                 value={dateEnded}
        //             />
        //             <button>Resubmit</button>
        //             {/* <button onClick={this.addExperience}>Add Experience</button> */}
        //         </form>
        //     )
        // }
        const { companyName, positionTitle, tasks, dateStarted, dateEnded, isEditing } = this.state;
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
                    <button>Submit</button>
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