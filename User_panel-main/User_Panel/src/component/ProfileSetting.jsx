import React, { useState } from "react";
import "./ProfileSetting.css";

const ProfilePage = () => {
  const [formData, setFormData] = useState({
    firstName: "Kajal",
    lastName: "Singh",
    state: "Madhya Pradesh",
    city: "Umaria",
    zipCode: "484551",
    address: "Birsinghpur",
  });

  const [popupState, setPopupState] = useState("idle"); // idle | loading | success

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPopupState("loading");

    // Simulate API call
    setTimeout(() => {
      setPopupState("success");

      // Hide popup after success animation
      setTimeout(() => setPopupState("idle"), 2000);
    }, 2000);
  };

  return (
    <div className="pp-container">
      <div className="pp-card">
        <div className="pp-left">
          <div className="pp-avatar">
            <img src="/pp.jpg" alt="Profile" />
          </div>
          <h3 className="pp-username">kajal3212</h3>
          <p className="pp-info">[Email is protected for the demo]</p>
          <p className="pp-info">+[Mobile is protected for the demo]</p>
          <p className="pp-info">India</p>
          <p className="pp-info">{formData.address}</p>
        </div>

        <div className="pp-right">
          <h2 className="pp-title">Update Profile</h2>
          <form onSubmit={handleSubmit}>
            <div className="pp-row">
              <div className="pp-field">
                <label>First Name</label>
                <input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="pp-field">
                <label>Last Name</label>
                <input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="pp-row">
              <div className="pp-field">
                <label>State</label>
                <input
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                />
              </div>
              <div className="pp-field">
                <label>City</label>
                <input
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="pp-row">
              <div className="pp-field">
                <label>Zip Code</label>
                <input
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                />
              </div>
              <div className="pp-field">
                <label>Address</label>
                <input
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="pp-field">
              <label>Image</label>
              <input type="file" />
            </div>

            <button className="pp-submit-btn" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Popup Overlay */}
      {popupState !== "idle" && (
        <div className="pp-popup-overlay">
          <div className="pp-popup-content">
            {popupState === "loading" && (
              <div className="pp-loader">
                <div className="pp-spinner"></div>
                <p>Updating profile...</p>
              </div>
            )}
            {popupState === "success" && (
              <div className="pp-success">
                <svg
                  className="pp-checkmark"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 52 52"
                >
                  <circle className="pp-checkmark-circle" cx="26" cy="26" r="25" />
                  <path className="pp-checkmark-check" fill="none" d="M14 27l7 7 16-16" />
                </svg>
                <p>Profile updated successfully!</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
