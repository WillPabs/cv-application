import React from "react";
import { useState } from "react";
import uniqid from "uniqid";
import { Professional } from "./Professional";

export const ProfessionalSection = () => {
    const [experiences, setExperiences] = useState([]);
    const [experience, setExperience] = useState(
        {
            id: uniqid(),
            companyName: '',
            positionTitle: '',
            dateStarted: '',
            dateEnded: '',
            isEditing: true,
            tasks: []
        }
    )

    const addExperience = () => {
        setExperiences([...experiences, experience]);
        setExperience({
            id: uniqid(),
            companyName: '',
            positionTitle: '',
            dateStarted: '',
            dateEnded: '',
            isEditing: true,
            tasks: []
        })
    };

    const deleteExperience = (e) => {
        e.preventDefault();
        const id = e.target.id;
        experiences.filter(experience => experience.id !== id)
    };

    const heading = <div className="section-heading">Professional Experience</div>;
    return(
        <ul>
            {heading}
            <button 
                className="button-add"
                onClick={addExperience}
            >
                Add Experience
            </button>
            {experiences.map((experience) => {
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
                        deleteExperience={deleteExperience}
                    />
                )
            })}
        </ul>
    )
}