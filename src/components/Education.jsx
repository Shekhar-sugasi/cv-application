import { PropTypes } from "prop-types";
import "../styles/CV.css";

function Education({ educationList }) {
  return (
    <div className="education">
      <h3 className="education-title title">Education</h3>
      {educationList.map((education) => (
        <div className="education-entry entry" key={education.id}>
          <div className="education-left left">
            <div key="date" className="education-date date">
              {education.startDate} - {education.endDate}
            </div>
            <div className="education-location location" key="location">
              {education.location}
            </div>
          </div>

          <div className="education-right right">
            <div className="education-school school" key="school">
              <b>{education.school}</b>
            </div>
            <div className="education-degree degree" key="degree">
              {education.degree}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

Education.propTypes = {
  educationList: PropTypes.array,
};

export default Education;
