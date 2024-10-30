// src/components/Experience.jsx
import { useState } from "react";
import PropTypes from "prop-types";
import "../styles/Experience.css";

function Experience({ saveData, initialData }) {
  const [experienceList, setExperienceList] = useState([initialData]);

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updatedList = [...experienceList];
    updatedList[index][name] = value;
    setExperienceList(updatedList);
  };

  const handleAdd = () => {
    setExperienceList([
      ...experienceList,
      {
        companyName: "",
        positionTitle: "",
        mainResponsibilities: "",
        dateFrom: "",
        dateTo: "",
      },
    ]);
  };

  const handleSubmit = () => {
    saveData(experienceList);
  };

  return (
    <div className="experience">
      <h2>Practical Experience</h2>
      {experienceList.map((exp, index) => (
        <div key={index} className="experience-entry">
          <input
            type="text"
            name="companyName"
            value={exp.companyName || ""}
            onChange={(e) => handleChange(index, e)}
            placeholder="Company Name"
          />
          <input
            type="text"
            name="positionTitle"
            value={exp.positionTitle || ""}
            onChange={(e) => handleChange(index, e)}
            placeholder="Position Title"
          />
          <textarea
            name="mainResponsibilities"
            value={exp.mainResponsibilities || ""}
            onChange={(e) => handleChange(index, e)}
            placeholder="Main Responsibilities"
          ></textarea>
          <input
            type="date"
            name="dateFrom"
            value={exp.dateFrom || ""}
            onChange={(e) => handleChange(index, e)}
            placeholder="Date From"
          />
          <input
            type="date"
            name="dateTo"
            value={exp.dateTo || ""}
            onChange={(e) => handleChange(index, e)}
            placeholder="Date To"
          />
        </div>
      ))}
      <button onClick={handleAdd}>+ Add</button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

Experience.propTypes = {
  saveData: PropTypes.func.isRequired,
  initialData: PropTypes.object.isRequired,
};

export default Experience;
