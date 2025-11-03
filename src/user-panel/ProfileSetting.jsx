import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ProfileSetting.css";

const ProfilePage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    state: "",
    city: "",
    zipCode: "",
    address: "",
    avatar: null,
  });

  const [popupState, setPopupState] = useState("idle");

  // ✅ Fetch profile on mount
  useEffect(() => {
    const email = localStorage.getItem("email");

    if (!email) {
      console.log("Email not found in localStorage");
      return;
    }

    axios
      .get(`http://localhost:5000/api/auth/profile/${email}`)
      .then((res) => setFormData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, avatar: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPopupState("loading");

    try {
      const email = localStorage.getItem("email");
      const form = new FormData();

      Object.keys(formData).forEach((key) => {
        form.append(key, formData[key]);
      });

      await axios.put(
        `http://localhost:5000/api/auth/update-profile/${email}`,
        form,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      setPopupState("success");
      setTimeout(() => setPopupState("idle"), 2000);
    } catch (error) {
      console.log(error);
      setPopupState("idle");
      alert("Profile update failed!");
    }
  };

  return (
    <div className="pp-container">
      <div className="pp-card">
        <div className="pp-left">
          <div className="pp-avatar">
            <img
  src={
    formData.avatar
      ? (typeof formData.avatar === "string"
          ? `http://localhost:5000${formData.avatar}`
          : URL.createObjectURL(formData.avatar)
        )
      : "/pp.jpg"
  }
  alt="Profile"
  className="profile-img"
/>
          </div>
          <h3 className="pp-username">{formData.firstName} {formData.lastName}</h3>
          <p className="pp-info">{formData.email}</p>
          <p className="pp-info">{formData.address}</p>
        </div>

        <div className="pp-right">
          <h2 className="pp-title">Update Profile</h2>

          <form onSubmit={handleSubmit}>
            <div className="pp-row">
              <div className="pp-field">
                <label>First Name</label>
                <input name="firstName" value={formData.firstName} onChange={handleChange} />
              </div>
              <div className="pp-field">
                <label>Last Name</label>
                <input name="lastName" value={formData.lastName} onChange={handleChange} />
              </div>
            </div>

            <div className="pp-row">
              <div className="pp-field">
                <label>State</label>
                <input name="state" value={formData.state} onChange={handleChange} />
              </div>
              <div className="pp-field">
                <label>City</label>
                <input name="city" value={formData.city} onChange={handleChange} />
              </div>
            </div>

            <div className="pp-row">
              <div className="pp-field">
                <label>Zip Code</label>
                <input name="zipCode" value={formData.zipCode} onChange={handleChange} />
              </div>
              <div className="pp-field">
                <label>Address</label>
                <input name="address" value={formData.address} onChange={handleChange} />
              </div>
            </div>

            <div className="pp-field">
              <label>Profile Image</label>
              <input type="file" onChange={handleFileChange} />
            </div>

            <button className="pp-submit-btn" type="submit">Submit</button>
          </form>
        </div>
      </div>

      {popupState !== "idle" && (
        <div className="pp-popup-overlay">
          <div className="pp-popup-content">
            {popupState === "loading" && <div className="pp-loader">Updating profile...</div>}
            {popupState === "success" && <div className="pp-success">✅ Profile updated!</div>}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
