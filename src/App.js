import React from "react";
import { Education } from "./components/Education";
import { GeneralInfo } from "./components/GeneralInfo";
import { Professional } from "./components/Professional";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      education: {
        schoolName: '',
        major: '',
        dateOfStudy: '',
      },
      general: {
        name: '',
        email: '',
        phoneNo: '',
      },
      professional: {
        experiences: [
          {
            companyName: '',
            positionTitle: '',
            tasks: [],
            dateStarted: '',
            dateEnded: '',
          }
        ]
      }
    };

  }

  render() {
    return (
      <div className="App">
        <GeneralInfo
          name="Will"
          email="pabs@gmail.com"
          phoneNo="646-232-9560"
          handleChange={this.handleChange}
          handleEdit={this.handleEdit}
          handleSubmit={this.handleSubmit}
        />
        <Professional
          companyName="Tesla"
          positionTitle="Software Engineer"
          tasks="Created website"
          dateStarted="09/24/21"
          dateEnded=""
        />
        <Education
          schoolName="SJU"
          major="CS"
          dateOfStudy="2019"
        />
      </div>
    );
  };
}

export default App;
