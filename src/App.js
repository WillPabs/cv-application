import React from "react";
import { Education } from "./components/Education";
import { EducationSection } from "./components/EducationSection";
import { GeneralInfo } from "./components/GeneralInfo";
import { Professional } from "./components/Professional";
import { ProfessionalSection } from "./components/ProfessionalSection";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      
      
      educational: [],
    };

  }
  
  onSubmitExperience = (e) => {
    e.preventDefault();
    const property = e.target.id;
    const value = e.target.value;
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
        <ProfessionalSection/>
        <EducationSection/>
      </div>
    );
  };
}

export default App;
