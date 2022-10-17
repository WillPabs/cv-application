import React from "react";
import { useState } from "react";

export const Education = (props) => {
    const [id, setId] = useState(props.id);
    const [schoolName, setSchoolName] = useState(props.schoolName);
    const [major, setMajor] = useState(props.major);
    const [dateOfStudy, setDateOfStudy] = useState(props.dateOfStudy);
    const [isEditing, setIsEditing] = useState(props.isEditing);

    const handleChange = (e) => {
        const property = e.target.id;
        const value = e.target.value;

        if (property === 'id') setId(value)
        else if (property === 'schoolName') setSchoolName(value)
        else if (property === 'major') setMajor(value)
        else if (property === 'dateOfStudy') setDateOfStudy(value)
    }
    
    const handleEdit = (e) => {
        e.preventDefault();
        setIsEditing(() => isEditing === true ? false : true)
    }

    if (isEditing) {
        return (
            <form id={id} onSubmit={props.deleteExperience}>
                <input
                    type="text"
                    id="schoolName"
                    placeholder="School Name"
                    value={schoolName}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    id="major"
                    placeholder="Major"
                    value={major}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    id="dateOfStudy"
                    placeholder="Date of Study"
                    value={dateOfStudy}
                    onChange={handleChange}
                />
                <button className="button-edit" onClick={handleEdit}>Resubmit</button>
                <button className="button-delete" type="submit">Delete Experience</button>
            </form>
        );
    } else {
        return (
            <div>
                <div>{schoolName}</div>
                <div>{major}</div>
                <div>{dateOfStudy}</div>
                <button className="button-edit" onClick={handleEdit}>Edit</button>
            </div>
        );
    }
}