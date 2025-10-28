import { useState } from "react";
import "./TwoFactor.css";

function TwoFactor() {
  const [otp, setOtp] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <div className="auth-app-container">
      <div className="auth-card">
        {/* Left Section */}
        <div className="auth-left-section">
          <h2>Add Your Account</h2>
          <p>
            Use the QR code or setup key on your Google Authenticator app to add your account.
          </p>
          <div className="auth-qr-container">
            <img src="/qr-code.png" alt="QR Code" />
          </div>
          <div className="auth-setup-key">
            <label>Setup Key</label>
            <div className="auth-input-copy">
              <input type="text" value="STGHJ2LNSZP7E6I5" readOnly />
              <button onClick={() => navigator.clipboard.writeText("STGHJ2LNSZP7E6I5")}>
                Copy
              </button>
            </div>
          </div>
          <p className="auth-info-text">
            Google Authenticator is a multifactor app for mobile devices. It generates timed codes used during the 2-step verification process. To use Google Authenticator, install the application on your device:{" "}
            <a
              href="https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Play Store
            </a>{" "}
            |{" "}
            <a
              href="https://apps.apple.com/app/google-authenticator/id388497605"
              target="_blank"
              rel="noopener noreferrer"
            >
              App Store
            </a>
          </p>
        </div>

        {/* Right Section */}
        <div className="auth-right-section">
          <h2>Enable 2FA Security</h2>
          <form onSubmit={handleSubmit}>
            <label>Google Authenticator OTP</label>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="auth-modal">
          <div className="auth-modal-content">
            <h3>OTP Submitted Successfully!</h3>
            <p>Your OTP: <strong>{otp}</strong> has been verified.</p>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TwoFactor;
