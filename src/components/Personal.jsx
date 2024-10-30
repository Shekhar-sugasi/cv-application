import "../styles/Personal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PropTypes } from "prop-types";
import {
  faPhone,
  faLocationDot,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

export default function Personal({ info }) {
  return (
    <div className="personal-cv">
      <h3 className="personal-title">{info.name}</h3>
      <div className="personal-info">
        <div className="personal-email">
          <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: "5px" }} />
          {info.email}
        </div>
        <div className="personal-phone">
          <FontAwesomeIcon icon={faPhone} style={{ marginRight: "5px" }} />
          {info.phone}
        </div>
        <div className="personal-address">
          <FontAwesomeIcon
            icon={faLocationDot}
            style={{ marginRight: "5px" }}
          />
          {info.address}
        </div>
      </div>
    </div>
  );
}

Personal.propTypes = {
  info: PropTypes.object,
};
