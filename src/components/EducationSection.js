import React from "react";
import { useState } from "react";
import uniqid from "uniqid";
import { Education } from "./Education";

export const EducationSection = () => {
    const [experiences, setExperiences] = useState([]);
    const [experience, setExperience] = useState(
        {
            id: uniqid(),
            schoolName: '',
            major: '',
            dateOfStudy: '',
            isEditing: true
        });

    const addExperience = () => {
        setExperiences([...experiences, experience])
        setExperience({
            id: uniqid(),
            schoolName: '',
            major: '',
            dateOfStudy: '',
            isEditing: true
        })
    };
    
    const deleteExperience = (e) => {
        e.preventDefault();
        const id = e.target.id;
        setExperiences(experiences.filter(experience => experience.id !== id))
    };

    const heading = <div className="section-heading">Educational Experience</div>;
    const { id, schoolName, major, dateOfStudy, isEditing } = experience;
    return (
        <ul>
            {heading}
            <button 
                className="button-add"
                onClick={addExperience}
            >
                Add Experience
            </button>
            {experiences ? experiences.map((experience) => {
                return (
                    <Education
                        key={experience.id}
                        id={experience.id}
                        schoolName={experience.schoolName}
                        major={experience.major}
                        dateOfStudy={experience.dateOfStudy}
                        isEditing={experience.isEditing}
                        deleteExperience={deleteExperience}
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