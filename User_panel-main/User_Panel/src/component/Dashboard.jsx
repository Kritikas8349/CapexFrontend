import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiClock,
  FiCheckCircle,
  FiXCircle,
  FiBarChart2,
  FiPackage,
  FiArrowDownCircle,
  FiArrowUpCircle,
} from "react-icons/fi";
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  // ✅ Authenticated user from localStorage
  const user = JSON.parse(localStorage.getItem("user"));

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!user) {
      navigate("/"); // Redirect to login
    }
  }, [user, navigate]);

  if (!user) return null; // Prevent flash

  // Deposit state
  const [showDepositPreview, setShowDepositPreview] = useState(false);
  const [depositData, setDepositData] = useState({
    amount: "",
    currency: "",
    gateway: "",
    wallet: "",
  });

  // Withdraw state
  const [showWithdrawPreview, setShowWithdrawPreview] = useState(false);
  const [withdrawData, setWithdrawData] = useState({
    amount: "",
    currency: "",
    gateway: "",
    wallet: "",
  });

  // Popup state
  const [popupMsg, setPopupMsg] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const wallets = [
    { name: "Sunrhino", symbol: "SRH", balance: "0.0000", img: "/sunrhino.jpeg" },
    { name: "Ethereum", symbol: "ETH", balance: "0.0000", img: "/etherum.jpg" },
    { name: "Tether", symbol: "USDT", balance: "0.0000", img: "/tedher.png" },
    { name: "BNB", symbol: "BNB", balance: "0.0000", img: "/bnb.png" },
    { name: "Bitcoin", symbol: "BTC", balance: "0.0000", img: "/usdcoin.jpg" },
  ];

  // Handlers
  const handleDepositClick = () => {
    if (!depositData.amount || !depositData.currency) {
      setPopupMsg("Please enter amount and select currency first!");
      setShowPopup(true);
      return;
    }
    setShowDepositPreview(true);
  };

  const handleWithdrawClick = () => {
    if (!withdrawData.amount || !withdrawData.currency) {
      setPopupMsg("Please enter amount and select currency first!");
      setShowPopup(true);
      return;
    }
    setShowWithdrawPreview(true);
  };

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/"); // Redirect to login
  };

  return (
    <div className="dash-main-container">
      {/* Dashboard Header */}
      <div className="dash-header">
        <h2>Welcome, {user.firstName || user.email}</h2>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      {/* Stats Section */}
      <div className="dash-stats">
        <div className="dash-stat-card open-order">
          <div className="dash-icon"><FiClock size={24} /></div>
          <div><h4>Open Order</h4><p className="class">0</p></div>
        </div>
        <div className="dash-stat-card completed-order">
          <div className="dash-icon"><FiCheckCircle size={24} /></div>
          <div><h4>Completed Order</h4><p className="class">0</p></div>
        </div>
        <div className="dash-stat-card canceled-order">
          <div className="dash-icon"><FiXCircle size={24} /></div>
          <div><h4>Canceled Order</h4><p className="class">0</p></div>
        </div>
        <div className="dash-stat-card total-trade">
          <div className="dash-icon"><FiBarChart2 size={24} /></div>
          <div><h4>Total Trade</h4><p className="class">0</p></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="dash-content">
        {/* Left Side */}
        <div className="dash-left">
          <div className="dash-recent-card">
            <h4>Recent Order</h4>
            <div className="dash-empty">
              <div className="dash-box-icon"><FiPackage size={28} /></div>
              <p>No order found</p>
            </div>
          </div>
          <div className="dash-recent-card">
            <h4>Recent Transactions</h4>
            <div className="dash-empty">
              <div className="dash-box-icon"><FiPackage size={28} /></div>
              <p>No transactions found</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="dash-right">
          {/* Wallet Overview */}
          <div className="dash-wallet-overview">
            <h4>Wallet Overview</h4>
            <p className="wallet-desc">Available wallet balance including the converted total balance</p>
            <p className="dash-balance">$0.0000 USD</p>
            <p className="dash-subtitle">Estimated Total Balance</p>

            <div className="dash-wallet-list scrollable">
              {wallets.map((wallet, index) => (
                <div className="dash-wallet-item" key={index}>
                  <div className="wallet-icon"><img src={wallet.img} alt={wallet.name} /></div>
                  <div className="wallet-name">
                    <span>{wallet.name}</span>
                    <span className="wallet-symbol">{wallet.symbol}</span>
                  </div>
                  <div className="wallet-balance">{wallet.balance}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Deposit */}
          <div className="dash-money-card">
            <div className="dash-money-header">
              <FiArrowDownCircle className="money-icon deposit" size={22} />
              <h4>Deposit Money</h4>
            </div>
            <p className="money-desc">Make crypto & fiat deposits in a few steps</p>
            <div className="money-input-group">
              <input
                type="text"
                placeholder="Amount"
                className="money-input"
                value={depositData.amount}
                onChange={(e) => setDepositData({ ...depositData, amount: e.target.value })}
              />
              <select
                className="money-select"
                value={depositData.currency}
                onChange={(e) => setDepositData({ ...depositData, currency: e.target.value })}
              >
                <option value="">Select Currency</option>
                <option value="BTC">BTC</option>
                <option value="ETH">ETH</option>
                <option value="USDT">USDT</option>
                <option value="BNB">BNB</option>
              </select>
            </div>
            <button className="money-btn deposit-btn" onClick={handleDepositClick}>
              <FiArrowDownCircle size={18} /> Deposit
            </button>
          </div>

          {/* Withdraw */}
          <div className="dash-money-card">
            <div className="dash-money-header">
              <FiArrowUpCircle className="money-icon withdraw" size={22} />
              <h4>Withdraw Money</h4>
            </div>
            <p className="money-desc">Withdraw your balance with our world-class withdrawal process</p>
            <div className="money-input-group">
              <input
                type="text"
                placeholder="Amount"
                className="money-input"
                value={withdrawData.amount}
                onChange={(e) => setWithdrawData({ ...withdrawData, amount: e.target.value })}
              />
              <select
                className="money-select"
                value={withdrawData.currency}
                onChange={(e) => setWithdrawData({ ...withdrawData, currency: e.target.value })}
              >
                <option value="">Select Currency</option>
                <option value="BTC">BTC</option>
                <option value="ETH">ETH</option>
                <option value="USDT">USDT</option>
                <option value="BNB">BNB</option>
              </select>
            </div>
            <button className="money-btn withdraw-btn" onClick={handleWithdrawClick}>
              <FiArrowUpCircle size={18} /> Withdraw
            </button>
          </div>
        </div>
      </div>

      {/* Deposit Preview */}
      {showDepositPreview && (
        <div className="deposit-preview">
          <div className="preview-header">
            <h3>Deposit Preview</h3>
            <span className="close-btn" onClick={() => setShowDepositPreview(false)}>×</span>
          </div>
          <div className="preview-content">
            <div className="form-group">
              <label>Amount</label>
              <input
                type="text"
                value={depositData.amount}
                onChange={(e) => setDepositData({ ...depositData, amount: e.target.value })}
                placeholder="Enter amount"
              />
            </div>
            <div className="form-group">
              <label>Payment Gateway</label>
              <select
                value={depositData.gateway || ""}
                onChange={(e) => setDepositData({ ...depositData, gateway: e.target.value })}
              >
                <option value="">Select Gateway</option>
                <option value="BTC">BTC</option>
                <option value="ETH">ETH</option>
                <option value="USDT">USDT</option>
                <option value="BNB">BNB</option>
              </select>
            </div>
            <div className="form-group">
              <label>Wallet Type</label>
              <select
                value={depositData.wallet || ""}
                onChange={(e) => setDepositData({ ...depositData, wallet: e.target.value })}
              >
                <option value="">Select Wallet</option>
                <option value="Main Wallet">Main Wallet</option>
                <option value="Trading Wallet">Trading Wallet</option>
              </select>
            </div>
            <button className="preview-submit-btn">Submit Deposit</button>
          </div>
        </div>
      )}

      {/* Withdraw Preview */}
      {showWithdrawPreview && (
        <div className="deposit-preview">
          <div className="preview-header">
            <h3>Withdraw Preview</h3>
            <span className="close-btn" onClick={() => setShowWithdrawPreview(false)}>×</span>
          </div>
          <div className="preview-content">
            <div className="form-group">
              <label>Amount</label>
              <input
                type="text"
                value={withdrawData.amount}
                onChange={(e) => setWithdrawData({ ...withdrawData, amount: e.target.value })}
                placeholder="Enter amount"
              />
            </div>
            <div className="form-group">
              <label>Payment Gateway</label>
              <select
                value={withdrawData.gateway || ""}
                onChange={(e) => setWithdrawData({ ...withdrawData, gateway: e.target.value })}
              >
                <option value="">Select Gateway</option>
                <option value="BTC">BTC</option>
                <option value="ETH">ETH</option>
                <option value="USDT">USDT</option>
                <option value="BNB">BNB</option>
              </select>
            </div>
            <div className="form-group">
              <label>Wallet Type</label>
              <select
                value={withdrawData.wallet || ""}
                onChange={(e) => setWithdrawData({ ...withdrawData, wallet: e.target.value })}
              >
                <option value="">Select Wallet</option>
                <option value="Main Wallet">Main Wallet</option>
                <option value="Trading Wallet">Trading Wallet</option>
              </select>
            </div>
            <button className="preview-submit-btn">Submit Withdraw</button>
          </div>
        </div>
      )}

      {/* Popup */}
      {showPopup && (
        <div className="custom-popup">
          <div className="popup-content">
            <p>{popupMsg}</p>
            <button className="popup-btn" onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
