import { PropTypes } from "prop-types";
import _ from "lodash";
import { Input } from "./Input.jsx";
import "../styles/Buttons.css";

function EducationForm({
  education,
  setEducation,
  handleSubmit,
  handleCancel,
  handleDelete,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <Input
        name="School"
        value={education.school}
        onChange={(e) => setEducation({ ...education, school: e.target.value })}
      />
      <Input
        name="Start Date"
        value={education.startDate}
        onChange={(e) =>
          setEducation({ ...education, startDate: e.target.value })
        }
      />
      <Input
        name="End Date"
        value={education.endDate}
        onChange={(e) =>
          setEducation({ ...education, endDate: e.target.value })
        }
      />
      <Input
        name="Degree"
        value={education.degree}
        onChange={(e) => setEducation({ ...education, degree: e.target.value })}
      />
      <Input
        name="Location"
        value={education.location}
        onChange={(e) =>
          setEducation({ ...education, location: e.target.value })
        }
      />
      <div className="buttons">
        {!_.isEmpty(education) && (
          <input
            type="button"
            value="Delete"
            className="delete-btn btn"
            onClick={handleDelete}
          />
        )}
        <input
          type="button"
          value="Cancel"
          className="cancel-btn btn"
          onClick={handleCancel}
        />
        <input type="Submit" className="submit-btn btn" />
      </div>
    </form>
  );
}

EducationForm.propTypes = {
  education: PropTypes.object,
  setEducation: PropTypes.func,
  handleSubmit: PropTypes.func,
  handleCancel: PropTypes.func,
  handleDelete: PropTypes.func,
};

export default EducationForm;
