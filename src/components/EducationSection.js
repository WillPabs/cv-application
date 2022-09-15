import React from "react";
import uniqid from "uniqid";
import { Education } from "./Education";

export class EducationSection extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            experiences: [],
            experience: {
                id: uniqid(),
                schoolName: '',
                major: '',
                dateOfStudy: '',
                isEditing: true
            }
        }
    }

    addExperience = () => {
        this.setState({
            experiences: [...this.state.experiences, this.state.experience],
            experience: {
                id: uniqid(),
                schoolName: '',
                major: '',
                dateOfStudy: '',
                isEditing: true
            },
        });
    };

    deleteExperience = (e) => {
        e.preventDefault();
        const id = e.target.id;
        this.setState({
            experiences: this.state.experiences.filter(experience => experience.id !== id)
        });
    };


    render() {
        const heading = <div>Educational Experience</div>;
        const { id, schoolName, major, dateOfStudy, isEditing } = this.state.experience;
        const { experiences } = this.state;
        return (
            <ul>
                {heading}
                <button onClick={this.addExperience}>Add Experience</button>
                {experiences ? experiences.map((experience) => {
                    return (
                        <Education
                            key={experience.id}
                            id={experience.id}
                            schoolName={experience.schoolName}
                            major={experience.major}
                            dateOfStudy={experience.dateOfStudy}
                            isEditing={experience.isEditing}
                            deleteExperience={this.deleteExperience}
                        />
                    )
                }) :
                    <Education
                        id={id}
                        schoolName={schoolName}
                        major={major}
                        dateOfStudy={dateOfStudy}
                        isEditing={isEditing}
                    />
                }
            </ul>
        )
    }


}