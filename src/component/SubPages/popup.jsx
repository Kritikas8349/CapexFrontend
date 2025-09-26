import React, { useState } from "react";
import "./Popup.css"; // 👈 CSS import

const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="popup-container">
      {/* 🔘 Button jisse popup open hoga */}
      <button className="popup-delete-btn" onClick={() => setShowPopup(true)}>
        Delete Item
      </button>

      {/* 📦 Popup */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            {/* ❌ Close button */}
            <button className="popup-close" onClick={() => setShowPopup(false)}>
              ✖
            </button>

            {/* 🗑️ Icon */}
            <div className="popup-icon">🗑️</div>

            {/* 📄 Title & Message */}
            <h2>Confirm Delete</h2>
            <p>Are you sure you want to delete this item?</p>

            {/* ✅ Buttons */}
            <div className="popup-buttons">
              <button
                className="popup-confirm"
                onClick={() => {
                  alert("Item Deleted ✅");
                  setShowPopup(false);
                }}
              >
                Delete
              </button>
              <button className="popup-cancel" onClick={() => setShowPopup(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;
