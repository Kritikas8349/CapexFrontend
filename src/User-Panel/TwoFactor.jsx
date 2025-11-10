import { useState } from "react";
import axios from "axios";
import "./TwoFactor.css";

function TwoFactor() {
  const [otp, setOtp] = useState("");
  const [qr, setQr] = useState("");
  const [secret, setSecret] = useState("");
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";
  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user?._id;
  const email = user?.email;

  const generate2FA = async () => {
    if (!userId) {
      alert("User not logged in. Please login first.");
      return;
    }

    try {
      const res = await axios.post(`${BACKEND_URL}/api/2fa/generate`, {
        userId,
        email,
      });

      setSecret(res.data.secret);
      setQr(res.data.qr);
      alert("✅ QR & Secret Generated");
    } catch (err) {
      console.error(err);
      alert("Error generating 2FA. Try again.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(`${BACKEND_URL}/api/2fa/verify`, {
        userId,
        otp,
      });

      alert("✅ 2FA Enabled Successfully");
      setShowModal(true);
    } catch (err) {
      alert(err.response?.data?.message || "❌ Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

  const copyKey = () => {
    navigator.clipboard.writeText(secret);
    alert("✅ Secret Key Copied!");
  };

  return (
    <div className="auth-app-container">
      <div className="auth-card">

        {/* Left */}
        <div className="auth-left-section">
          <h2>Add Your Account</h2>
          <p>Scan the QR or use the secret key in Google Authenticator</p>

          {qr ? (
            <img src={qr} alt="QR Code" className="qr-img" />
          ) : (
            <button onClick={generate2FA}>Generate QR & Key</button>
          )}

          {secret && (
            <div className="auth-setup-key">
              <label>Setup Key</label>
              <div className="auth-input-copy">
                <input readOnly value={secret} />
                <button onClick={copyKey}>Copy</button>
              </div>
            </div>
          )}
        </div>

        {/* Right */}
        <div className="auth-right-section">
          <h2>Verify OTP</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <button type="submit" disabled={loading}>
              {loading ? "Verifying..." : "Submit"}
            </button>
          </form>
        </div>
      </div>

      {showModal && (
        <div className="auth-modal">
          <div className="auth-modal-content">
            <h3>✅ 2FA Enabled Successfully!</h3>
            <p>Your Google Authenticator is now active.</p>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TwoFactor;
