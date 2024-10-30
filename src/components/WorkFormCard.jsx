import { PropTypes } from "prop-types";
import { useState } from "react";
import WorkForm from "./WorkForm.jsx";
import ExpandIcon from "./ExpandIcon.jsx";
import { v4 as uuidv4 } from "uuid";
import "../styles/Card.css";
import "../styles/Buttons.css";

function WorkFormCard({ workList, setWorkList }) {
  const [showForm, setShowForm] = useState(false);
  const [showBody, setShowBody] = useState(true);
  const [work, setWork] = useState({});

  function handleSubmit(e) {
    e.preventDefault();
    if (work.id) {
      let newWorkList = workList.map((e) => {
        return e.id === work.id ? work : e;
      });
      setWorkList(newWorkList);
    } else {
      let newWork = { ...work, id: uuidv4() };
      setWorkList([...workList, newWork]);
    }
    setShowForm(false);
  }

  function handleCancel() {
    setShowForm(false);
  }

  function handleDelete() {
    setWorkList(workList.filter((e) => e.id !== work.id));
    setShowForm(false);
  }

  var body;

  if (!showBody) {
    body = null;
  } else if (showForm) {
    body = (
      <WorkForm
        work={work}
        setWork={setWork}
        handleSubmit={handleSubmit}
        handleCancel={handleCancel}
        handleDelete={handleDelete}
      />
    );
  } else {
    body = (
      <div className="card-body">
        {workList.map((work) => (
          <div
            className="card-entry"
            key={work.id}
            onClick={() => {
              setShowForm(true);
              setWork(work);
            }}
          >
            {work.company}
          </div>
        ))}
        <button
          style={{ marginTop: "15px" }}
          className="add-btn btn"
          onClick={() => {
            setShowForm(true);
            setWork({});
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
        Work
        <ExpandIcon
          initClosed={true}
          handleClick={() => setShowBody((show) => !show)}
        />
      </div>
      {body}
    </div>
  );
}

WorkFormCard.propTypes = {
  workList: PropTypes.array,
  setWorkList: PropTypes.func,
};

export default WorkFormCard;
