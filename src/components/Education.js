import React from "react";

export class Education extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        const { schoolName, major, dateOfStudy } = this.props;
        return (
            <form>
                <div>Educational Experience</div>
                <div>{schoolName}</div>
                <div>{major}</div>
                <div>{dateOfStudy}</div>
            </form>
        );
    };
};