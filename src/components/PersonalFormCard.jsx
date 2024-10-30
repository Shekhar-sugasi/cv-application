import { useState } from "react";
import { PropTypes } from "prop-types";
import { Input } from "./Input.jsx";
import ExpandIcon from "./ExpandIcon.jsx";
import "../styles/Card.css";

export default function PersonalFormCard({ info, setInfo }) {
  const [showBody, setShowBody] = useState(false);

  return (
    <div className="card">
      <div className="card-header">
        Personal
        <ExpandIcon
          initClosed={false}
          handleClick={() => setShowBody((show) => !show)}
        />
      </div>
      {showBody && (
        <form>
          <Input
            name="Name"
            value={info.name}
            onChange={(e) => setInfo({ ...info, name: e.target.value })}
          />
          <Input
            name="Email"
            value={info.email}
            onChange={(e) => setInfo({ ...info, email: e.target.value })}
          />
          <Input
            name="Phone"
            value={info.phone}
            onChange={(e) => setInfo({ ...info, phone: e.target.value })}
          />
          <Input
            name="Address"
            value={info.address}
            onChange={(e) => setInfo({ ...info, address: e.target.value })}
          />
        </form>
      )}
    </div>
  );
}

PersonalFormCard.propTypes = {
  info: PropTypes.object,
  setInfo: PropTypes.func,
};
