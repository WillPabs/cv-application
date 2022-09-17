import React from "react";

export class GeneralInfo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: this.props.name,
            email: this.props.email,
            phoneNo: this.props.phoneNo,
            isEditing: false
        }
    }

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
        const { name, email, phoneNo, isEditing } = this.state;

        if (isEditing) {
            return(
                <form 
                    className="flex space-x-1 align-center"
                    onSubmit={this.handleSubmit}
                >
                    <input 
                        type="text"
                        id="name"
                        placeholder="Name"
                        onChange={this.handleChange}
                        value={name}
                    />
                    <input 
                        type="email"
                        id="email"
                        placeholder="Email"
                        onChange={this.handleChange}
                        value={email}
                    />
                    <input 
                        type="text"
                        id="phoneNo"
                        placeholder="Phone Number"
                        onChange={this.handleChange}
                        value={phoneNo}
                    />
                    <button className="button-edit">
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
                    <button className="button-edit" onClick={this.handleEdit}>Edit</button>
                </div>
            );
        }
    };
}