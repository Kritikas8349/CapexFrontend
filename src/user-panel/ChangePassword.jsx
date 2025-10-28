import React, { useState } from "react";
import "./ChangePassword.css";

const ChangePassword = () => {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState({ show: false, type: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.currentPassword || !formData.newPassword || !formData.confirmPassword) {
      setPopup({ show: true, type: "error", message: "Please fill all fields!" });
      return;
    }

    if (formData.newPassword !== formData.confirmPassword) {
      setPopup({ show: true, type: "error", message: "Passwords do not match!" });
      return;
    }

    // Show loading popup
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setPopup({ show: true, type: "success", message: "Password updated successfully!" });
      setFormData({ currentPassword: "", newPassword: "", confirmPassword: "" });
    }, 2000);
  };

  return (
    <div className="cp-container">
      <div className="cp-card">
        <h2>Change Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="cp-field">
            <label>Current Password</label>
            <input
              type="password"
              name="currentPassword"
              value={formData.currentPassword}
              onChange={handleChange}
              placeholder="Enter current password"
            />
          </div>
          <div className="cp-field">
            <label>New Password</label>
            <input
              type="password"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
              placeholder="Enter new password"
            />
          </div>
          <div className="cp-field">
            <label>Confirm New Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm new password"
            />
          </div>
          <button type="submit" className="cp-submit-btn">Update Password</button>
        </form>
      </div>

      {/* Loading Popup */}
      {loading && (
        <div className="cp-popup-overlay">
          <div className="cp-popup-content cp-loader">
            <div className="cp-spinner"></div>
            <p>Updating password...</p>
          </div>
        </div>
      )}

      {/* Success/Error Popup */}
      {popup.show && !loading && (
        <div className="cp-popup-overlay">
          <div className={`cp-popup-content ${popup.type === "success" ? "cp-success" : "cp-error"}`}>
            <p>{popup.message}</p>
            <button onClick={() => setPopup({ show: false, type: "", message: "" })}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChangePassword;
