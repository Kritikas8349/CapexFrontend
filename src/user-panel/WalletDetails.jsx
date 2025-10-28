import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaCheckCircle, FaTimesCircle, FaListAlt, FaWallet, FaExchangeAlt, FaChartLine } from "react-icons/fa";
import "./WalletDetails.css";

export default function WalletDetails() {
  const { symbol } = useParams();
  const navigate = useNavigate();

  const [openForm, setOpenForm] = useState(""); // deposit/withdraw/transfer

  const walletData = {
    XRP: { name: "XRP", img: "/xrp.jpg" },
    BTC: { name: "Bitcoin", img: "/bitcoin.jpg" },
    // ... baki coins
  };

  const wallet = walletData[symbol] || { name: symbol, img: "/defaultcoin.png" };

  const stats = [
    { title: "Open Order", value: 0, icon: <FaShoppingCart color="#FFB400" /> },
    { title: "Completed Order", value: 0, icon: <FaCheckCircle color="#00C851" /> },
    { title: "Canceled Order", value: 0, icon: <FaTimesCircle color="#ff4444" /> },
    { title: "Total Order", value: 0, icon: <FaListAlt color="#33b5e5" /> },
  ];

  return (
    <div className="wallet-detail-container">
      <div className="wallet-detail-header">
        <h2>Spot Wallet: {wallet.name}</h2>
        <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>
      </div>

      <div className="wallet-detail-stats">
        {stats.map((s, idx) => (
          <div key={idx} className="stat-card">
            <span className="stat-icon">{s.icon}</span> {s.title} <span>{s.value}</span>
          </div>
        ))}
      </div>

      <div className="wallet-balance-section">
        <div className="coin-card">
          <img src={wallet.img} alt={symbol} className="coin-img" />
          <h3>{wallet.name}</h3>
          <p>{symbol}</p>
          <div className="balances">
            <div>
              <h4>0.0000</h4>
              <p>Available Balance</p>
            </div>
            <div>
              <h4>0.0000</h4>
              <p>In Order</p>
            </div>
            <div>
              <h4>0.0000</h4>
              <p>Total Balance</p>
            </div>
          </div>
          <div className="actions">
            <button className="deposit-btn" onClick={() => setOpenForm("deposit")}>Deposit</button>
            <button className="withdraw-btn" onClick={() => setOpenForm("withdraw")}>Withdraw</button>
            <button className="transfer-btn" onClick={() => setOpenForm("transfer")}>Transfer</button>
          </div>
        </div>

        <div className="transaction-card">
          <h3>Transaction History</h3>
          <table>
            <thead>
              <tr>
                <th>Transacted</th>
                <th>Trx</th>
                <th>Amount</th>
                <th>Post Balance</th>
                <th>Detail</th>
              </tr>
            </thead>
            <tbody>
              <tr className="no-tx">
                <td colSpan="5">
                  <div className="no-transaction">
                    <img src="/emptybox.png" alt="No tx" />
                    <p>No transaction found</p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Sliding Panel */}
      <div className={`side-form-panel ${openForm ? "open" : ""}`}>
        <button className="close-panel" onClick={() => setOpenForm("")}>✖</button>

        {openForm === "deposit" && (
          <div className="form-content">
            <h3>Deposit {symbol}</h3>
            <label>Amount</label>
            <input type="number" placeholder="Enter amount" />
            <label>Payment Gateway</label>
            <select>
              <option value="">Select Gateway</option>
              <option value="paypal">PayPal</option>
              <option value="credit">Credit Card</option>
            </select>
            <button className="submit-btn">Submit Deposit</button>
          </div>
        )}

        {openForm === "withdraw" && (
          <div className="form-content">
            <h3>Withdraw {symbol}</h3>
            <label>Amount</label>
            <input type="number" placeholder="Enter amount" />
            <label>Wallet Address</label>
            <input type="text" placeholder="Enter wallet address" />
            <button className="submit-btn">Submit Withdraw</button>
          </div>
        )}

     {openForm === "transfer" && (
  <div className="form-content">
    <h3>Transfer {symbol}</h3>
    <p>
      Fund transfer of {symbol} within the Vinance platform, allowing for the allocation of a maximum of 0.0000 {symbol} to other wallet.
    </p>

    <label>Amount</label>
    <input type="number" placeholder="Enter amount" />
    <button className="max-btn">MAX</button>

    <label>To Wallet</label>
    <select>
      <option value="">Select One</option>
      <option value="wallet1">Wallet 1</option>
      <option value="wallet2">Wallet 2</option>
      {/* Aap dynamically populate bhi kar sakte ho */}
    </select>

    <button className="submit-btn">Submit Transfer</button>
  </div>

        )}
      </div>
    </div>
  );
}
