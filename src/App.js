import React from "react";
import { Education } from "./components/Education";
import { GeneralInfo } from "./components/GeneralInfo";
import { Professional } from "./components/Professional";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      professional: [],
      educational: [],
    };

  }
  
  onSubmitExperience = (e) => {
    e.preventDefault();
    const property = e.target.id;
    const value = e.target.value;
  };

  addExperience = () => {
    this.setState({
      professional: [...this.state.professional, <Professional/>]
    })
  }

  render() {
    // const professional = 

    return (
      <div className="App">
        <GeneralInfo
          name="Will"
          email="pabs@gmail.com"
          phoneNo="646-232-9560"
        />
        {this.state.professional}
        <Professional
          // experiences={this.state.professional}
          // companyName="Tesla"
          // positionTitle="Software Engineer"
          // tasks="Created website"
          // dateStarted="09/24/21"
          // dateEnded=""
        />
        <button onClick={this.addExperience}>Add Experience</button>
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
