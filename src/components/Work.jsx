import { PropTypes } from "prop-types";
import "../styles/CV.css";

function Work({ workList }) {
  return (
    <div className="work">
      <h3 className="work-title title">Work</h3>
      {workList.map((work) => (
        <div className="work-entry entry" key={work.id}>
          <div className="work-left left">
            <div key="date" className="work-date date">
              {work.startDate} - {work.endDate}
            </div>
            <div className="work-location" key="location">
              {work.location}
            </div>
          </div>

          <div className="work-right right">
            <div className="work-company company" key="company">
              <b>{work.company}</b>
            </div>
            <div className="work-position position" key="position">
              {work.position}
            </div>
            <div key="description" className="work-description description">
              {work.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

Work.propTypes = {
  workList: PropTypes.array,
};

export default Work;
