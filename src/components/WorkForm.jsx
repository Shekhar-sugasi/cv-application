import { PropTypes } from "prop-types";
import _ from "lodash";
import { Input, TextArea } from "./Input.jsx";
import "../styles/Buttons.css";

function WorkForm({ work, setWork, handleSubmit, handleCancel, handleDelete }) {
  console.log(work);
  return (
    <form onSubmit={handleSubmit}>
      <Input
        name="Company"
        value={work.company}
        onChange={(e) => setWork({ ...work, company: e.target.value })}
      />

      <Input
        name="Start Date"
        value={work.startDate}
        onChange={(e) => setWork({ ...work, startDate: e.target.value })}
      />

      <Input
        name="End Date"
        value={work.endDate}
        onChange={(e) => setWork({ ...work, endDate: e.target.value })}
      />

      <Input
        name="Position"
        value={work.position}
        onChange={(e) => setWork({ ...work, position: e.target.value })}
      />

      <Input
        name="Location"
        value={work.location}
        onChange={(e) => setWork({ ...work, location: e.target.value })}
      />

      <TextArea
        name="Description"
        value={work.description}
        onChange={(e) => setWork({ ...work, description: e.target.value })}
      />

      <div className="buttons">
        {!_.isEmpty(work) && (
          <input
            type="button"
            className="delete-btn btn"
            value="Delete"
            onClick={handleDelete}
          />
        )}
        <input
          type="button"
          value="Cancel"
          className="cancel-btn btn"
          onClick={handleCancel}
        />
        <input type="Submit" className="submit-btn btn" value="Submit" />
      </div>
    </form>
  );
}

WorkForm.propTypes = {
  work: PropTypes.object,
  setWork: PropTypes.func,
  handleSubmit: PropTypes.func,
  handleCancel: PropTypes.func,
  handleDelete: PropTypes.func,
};

export default WorkForm;
