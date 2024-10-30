import { useState } from "react";
import "./App.css";
import exampleData from "./sampleData.jsx";
import PersonalFormCard from "./components/PersonalFormCard.jsx";
import Personal from "./components/Personal.jsx";
import Education from "./components/Education.jsx";
import EducationFormCard from "./components/EducationFormCard.jsx";
import Work from "./components/Work.jsx";
import WorkFormCard from "./components/WorkFormCard.jsx";

function App() {
  const [personalInfo, setPersonalInfo] = useState(exampleData.personalList);
  const [educationList, setEducationList] = useState(exampleData.educationList);
  const [workList, setWorkList] = useState(exampleData.workList);

  return (
    <div className="cv-application">
      <div className="forms">
        <PersonalFormCard info={personalInfo} setInfo={setPersonalInfo} />
        <EducationFormCard
          educationList={educationList}
          setEducationList={setEducationList}
        />
        <WorkFormCard workList={workList} setWorkList={setWorkList} />
      </div>

      <div className="cv">
        <Personal info={personalInfo} />
        <Education educationList={educationList} />
        <Work workList={workList} />
      </div>
    </div>
  );
}

export default App;
