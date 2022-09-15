import React from "react";
import { EducationSection } from "./components/EducationSection";
import { GeneralInfo } from "./components/GeneralInfo";
import { ProfessionalSection } from "./components/ProfessionalSection";

class App extends React.Component {
  render() {
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
