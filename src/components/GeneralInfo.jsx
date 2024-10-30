import { useState } from "react";
import PropTypes from "prop-types";
import "../styles/GeneralInfo.css";

function GeneralInfo({ saveData, initialData }) {
  const [editMode, setEditMode] = useState(true);
  const [info, setInfo] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handleSubmit = () => {
    setEditMode(false);
    saveData(info);
  };

  return (
    <div className="general-info">
      <h2>General Information</h2>
      {editMode ? (
        <>
          <input
            type="text"
            name="name"
            value={info.name || ""}
            onChange={handleChange}
            placeholder="Name"
          />
          <input
            type="email"
            name="email"
            value={info.email || ""}
            onChange={handleChange}
            placeholder="Email"
          />
          <input
            type="tel"
            name="phone"
            value={info.phone || ""}
            onChange={handleChange}
            placeholder="Phone"
          />
          <button onClick={handleSubmit}>Submit</button>
        </>
      ) : (
        <>
          <p>
            <strong>Name:</strong> {info.name}
          </p>
          <p>
            <strong>Email:</strong> {info.email}
          </p>
          <p>
            <strong>Phone:</strong> {info.phone}
          </p>
          <button onClick={() => setEditMode(true)}>Edit</button>
        </>
      )}
    </div>
  );
}

GeneralInfo.propTypes = {
  saveData: PropTypes.func.isRequired,
  initialData: PropTypes.object.isRequired,
};

export default GeneralInfo;
