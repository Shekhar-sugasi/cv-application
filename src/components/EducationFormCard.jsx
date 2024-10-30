import { PropTypes } from "prop-types";
import { useState } from "react";
import EducationForm from "./EducationForm.jsx";
import ExpandIcon from "./ExpandIcon.jsx";
import { v4 as uuidv4 } from "uuid";
import "../styles/Card.css";
import "../styles/Buttons.css";

function EducationFormCard({ educationList, setEducationList }) {
  const [showForm, setShowForm] = useState(false);
  const [showBody, setShowBody] = useState(true);
  const [education, setEducation] = useState({});

  function handleSubmit(e) {
    e.preventDefault();
    if (education.id) {
      let newEducationList = educationList.map((e) => {
        return e.id === education.id ? education : e;
      });
      console.log(newEducationList);
      setEducationList(newEducationList);
    } else {
      let newEd = { ...education, id: uuidv4() };
      console.log(newEd);
      setEducationList([...educationList, newEd]);
    }
    setShowForm(false);
  }

  function handleCancel() {
    setShowForm(false);
  }

  function handleDelete() {
    setEducationList(educationList.filter((e) => e.id !== education.id));
    setShowForm(false);
  }

  var body;

  if (!showBody) {
    body = null;
  } else if (showForm) {
    body = (
      <EducationForm
        education={education}
        setEducation={setEducation}
        handleSubmit={handleSubmit}
        handleCancel={handleCancel}
        handleDelete={handleDelete}
      />
    );
  } else {
    body = (
      <div className="card-body" style={{ marginTop: "15px" }}>
        {educationList.map((education) => (
          <div
            className="card-entry"
            key={education.id}
            onClick={() => {
              setShowForm(true);
              setEducation(education);
            }}
          >
            {education.school}
          </div>
        ))}
        <button
          style={{ marginTop: "15px" }}
          className="add-btn btn"
          onClick={() => {
            setShowForm(true);
            setEducation({});
          }}
        >
          Add
        </button>
      </div>
    );
  }
  return (
    <div className="card">
      <div className="card-header">
        Education
        <ExpandIcon
          initClosed={true}
          handleClick={() => setShowBody((show) => !show)}
        />
      </div>
      {body}
    </div>
  );
}

EducationFormCard.propTypes = {
  educationList: PropTypes.array,
  setEducationList: PropTypes.func,
};

export default EducationFormCard;
