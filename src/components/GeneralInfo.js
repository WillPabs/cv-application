import React from "react";

export class GeneralInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { name, email, phoneNo} = this.props;
        return(
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
                <p>{phoneNo}</p>
            </div>
        );
    };
}