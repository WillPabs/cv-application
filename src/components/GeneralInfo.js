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

// export class GeneralInfo extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             name: this.props.name,
//             email: this.props.email,
//             phoneNo: this.props.phoneNo,
//             isEditing: false
//         }
//     }

//     handleChange = (e) => {
//         const property = e.target.id;
//         const value = e.target.value;
//         this.setState({
//             [property]: value
//         })
//     }

//     handleEdit = () => {
//         this.setState({
//             isEditing: this.state.isEditing === true ? false : true
//         });
//     }

//     handleSubmit = (e) => {
//         e.preventDefault();
//         this.handleEdit();
//     }

//     render() {
//         const { name, email, phoneNo, isEditing } = this.state;

//         if (isEditing) {
//             return(
//                 <form 
//                     className="flex space-x-1 align-center"
//                     onSubmit={this.handleSubmit}
//                 >
//                     <input 
//                         type="text"
//                         id="name"
//                         placeholder="Name"
//                         onChange={this.handleChange}
//                         value={name}
//                     />
//                     <input 
//                         type="email"
//                         id="email"
//                         placeholder="Email"
//                         onChange={this.handleChange}
//                         value={email}
//                     />
//                     <input 
//                         type="text"
//                         id="phoneNo"
//                         placeholder="Phone Number"
//                         onChange={this.handleChange}
//                         value={phoneNo}
//                     />
//                     <button className="button-edit">
//                         Resubmit
//                     </button>
//                 </form>
//             );
//         } else {
//             return(
//                 <div className="flex space-x-2 align-center">
//                     <div>{name}</div>
//                     <div id="email">{email}</div>
//                     <div id="phoneNo">{phoneNo}</div>
//                     <button className="button-edit" onClick={this.handleEdit}>Edit</button>
//                 </div>
//             );
//         }
//     };
// }