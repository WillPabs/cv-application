import React from "react";

export class Professional extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        const { companyName, positionTitle, tasks, dateStarted, dateEnded } = this.props;
        return(
            <form>
                <div>{companyName}</div>
                <div>{positionTitle}</div>
                <div>{tasks}</div>
                <div>{dateStarted}</div>
                <div>{dateEnded}</div>
            </form>
        );
    };
};