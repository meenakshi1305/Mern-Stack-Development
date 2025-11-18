import React, { useState } from "react";
import "./Registration.css";
import Dance from "../asset/image/dance.jpg";
import { FaCheckCircle } from "react-icons/fa";
import Counter from "./Counter";
import State from "./State";
const Registration = ({ goBack }) => {
  const [currentStatus, setCurrentStatus] = useState("");
  const [otherText, setOtherText] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
      goBack();
    }, 3000);
  };

  return (
    <div>
      <Counter />
      <State />
      {showPopup && (
        <div className="completionPopup">
          <h1>Submitted successfully!!</h1>
          <div className="badge">
            <FaCheckCircle className="successIcon" />
          </div>
        </div>
      )}

      <div className="formHolder">
        <div className="formImage">
          <img src={Dance} alt="Dance" className="leftImage" />
        </div>

        <div className="formContent">
          <h1>Registration for Classical Dance</h1>

          <label>Full Name</label>
          <input placeholder="Enter name.." name="name" type="text" />

          <label>Email Address</label>
          <input placeholder="Enter email.." name="email" type="email" />

          <label>Phone Number</label>
          <input placeholder="Enter phone number.." name="phno" type="number" />

          <div className="twoCol">
            <div className="field">
              <label>Webinar Time</label>
              <input value="12pm to 2pm" readOnly />
            </div>

            <div className="field">
              <label>Current Status</label>
              <select
                name="currentStatus"
                value={currentStatus}
                onChange={(e) => setCurrentStatus(e.target.value)}
              >
                <option value="">Select</option>
                <option value="student">Student</option>
                <option value="employee">Employee</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          {currentStatus === "other" && (
            <>
              <label>What are you doing now?</label>
              <input
                placeholder="Explain..."
                type="text"
                value={otherText}
                onChange={(e) => setOtherText(e.target.value)}
              />
            </>
          )}

          <button className="submitBtn" onClick={handleSubmit}>
            Submit
          </button>
          <button
            className="submitBtn"
            style={{ backgroundColor: "red" }}
            onClick={() => goBack()}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Registration;
