import React from "react";
import { useState } from "react";

export const GeneralInfo = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNo, setPhoneNo] = useState('')
    const [isEditing, setIsEditing] = useState(false)

    const handleChange = (e) => {
        const property = e.target.id;
        const value = e.target.value;
        if (property === 'name') setName(value)
        else if (property === 'email') setEmail(value)
        else if (property === 'phoneNo') setPhoneNo(value)
    }

    const handleEdit = (e) => {
        e.preventDefault();
        setIsEditing(() => isEditing === true ? false : true)
    }

    if (isEditing) {
        return(
            <form 
                className="flex space-x-1 align-center"
                onSubmit={handleEdit}
            >
                <input 
                    type="text"
                    id="name"
                    placeholder="Name"
                    onChange={handleChange}
                    value={name}
                />
                <input 
                    type="email"
                    id="email"
                    placeholder="Email"
                    onChange={handleChange}
                    value={email}
                />
                <input 
                    type="text"
                    id="phoneNo"
                    placeholder="Phone Number"
                    onChange={handleChange}
                    value={phoneNo}
                />
                <button 
                    type="submit" 
                    className="button-edit"
                >
                    Resubmit
                </button>
            </form>
        );
    } else {
        return(
            <div className="flex space-x-2 align-center">
                <div>{name}</div>
                <div id="email">{email}</div>
                <div id="phoneNo">{phoneNo}</div>
                <button 
                    className="button-edit" 
                    type="button"
                    onClick={handleEdit}
                >
                    Edit
                </button>
            </div>
        );
    }
}