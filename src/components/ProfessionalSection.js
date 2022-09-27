import React from "react";
import uniqid from "uniqid";
import { Professional } from "./Professional";

export class ProfessionalSection extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            experiences: [],
            experience: {
                id: uniqid(),
                companyName: '',
                positionTitle: '',
                tasks: [],
                dateStarted: '',
                dateEnded: '',
                isEditing: true,
            },
        }
    };

    addExperience = () => {
        this.setState({
            experiences: [...this.state.experiences, this.state.experience],
            experience: {
                id: uniqid(),
                companyName: '',
                positionTitle: '',
                tasks: [],
                dateStarted: '',
                dateEnded: '',
                isEditing: true,
            },
        });
    };

    deleteExperience = (e) => {
        e.preventDefault();
        const id = e.target.id;
        this.setState({
            experiences: this.state.experiences.filter(experience => experience.id !== id)
        });
        return false;
    };

    render() {
        const { experiences } = this.state;
        const heading = <div className="section-heading">Professional Experience</div>;
        return(
            <ul>
                {heading}
                <button 
                    className="button-add"
                    onClick={this.addExperience}
                >
                    Add Experience
                </button>
                {experiences ? experiences.map((experience) => {
                    return (
                        <Professional
                            key={experience.id} 
                            id={experience.id}
                            companyName={experience.companyName}
                            positionTitle={experience.positionTitle}
                            tasks={experience.tasks}
                            dateStarted={experience.dateStarted}
                            dateEnded={experience.dateEnded}
                            isEditing={experience.isEditing}
                            deleteExperience={this.deleteExperience}
                        />
                    )
                }) : 
                    <Professional 
                        id={this.state.experience.id}
                        companyName={this.state.experience.companyName}
                        positionTitle={this.state.experience.positionTitle}
                        tasks={this.state.experience.tasks}
                        dateStarted={this.state.experience.dateStarted}
                        dateEnded={this.state.experience.dateEnded}
                        isEditing={this.state.experience.isEditing}
                    /> 
                }
            </ul>
        )
    }
}