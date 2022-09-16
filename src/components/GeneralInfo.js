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
                <form onSubmit={this.handleSubmit}>
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
                    <button>
                        Resubmit
                    </button>
                </form>
            );
        } else {
            return(
                <div>
                    <div className="text-3xl text-blue-700 font-bold mb-5">{name}</div>
                    <div id="email">{email}</div>
                    <div id="phoneNo">{phoneNo}</div>
                    <button onClick={this.handleEdit}>Edit</button>
                </div>
            );
        }
    };
}