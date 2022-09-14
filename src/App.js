import React from "react";
import uniqid from "uniqid";
import { Education } from "./components/Education";
import { GeneralInfo } from "./components/GeneralInfo";
import { Professional } from "./components/Professional";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      professional: [],
      proExperience: {
        id: uniqid(),
        companyName: '',
        positionTitle: '',
        tasks: '',
        dateStarted: '',
        dateEnded: '',
        isEditing: true,
      },
      educational: [],
    };

  }
  
  onSubmitExperience = (e) => {
    e.preventDefault();
    const property = e.target.id;
    const value = e.target.value;
  };

  addExperience = (e) => {
    console.log(e)
    this.setState({
        professional: [...this.state.professional, this.state.proExperience]
    });
};

  render() {
    const { professional } = this.state;

    return (
      <div className="App">
        <GeneralInfo
          name="Will"
          email="pabs@gmail.com"
          phoneNo="646-232-9560"
        />
        {/* <Professional
          // experiences={this.state.professional}
          // companyName="Tesla"
          // positionTitle="Software Engineer"
          // tasks="Created website"
          // dateStarted="09/24/21"
          // dateEnded=""
        /> */}
        <Professional experiences={this.state.professional} addExperience={this.addExperience}/>
        
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
