import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; 
import "./ManageWallet.css";

export default function ManageWallets() {
  const navigate = useNavigate();

  const wallets = [
     { id: 1, name: "XRP", symbol: "XRP", img: "./xrp.jpg", available: "0.0000", inOrder: "0.0000", total: "0.0000" },
    { id: 2, name: "Australian Dollar", symbol: "AUD", img: "./australiandollar.png", available: "A$0.0000", inOrder: "A$0.0000", total: "A$0.0000" },
    { id: 3, name: "Tether", symbol: "USDT", img: "./tedher.png", available: "₮0.0000", inOrder: "₮0.0000", total: "₮0.0000" },
    { id: 4, name: "Binance USD", symbol: "BUSD", img: "./binanceusd.jpg", available: "0.0000", inOrder: "0.0000", total: "0.0000" },
    { id: 5, name: "Dai", symbol: "DAI", img: "./dai.png", available: "0.0000", inOrder: "0.0000", total: "0.0000" },
    { id: 6, name: "TrueUSD", symbol: "TUSD", img: "./tureusd.jpg", available: "0.0000", inOrder: "0.0000", total: "0.0000" },
    { id: 7, name: "Polkadot", symbol: "DOT", img: "./polkadot.jpg", available: "0.0000", inOrder: "0.0000", total: "0.0000" },
    { id: 8, name: "Japanese Yen", symbol: "JPY", img: "./japneseyen.jpg", available: "¥0.0000", inOrder: "¥0.0000", total: "¥0.0000" },
    { id: 9, name: "TRON", symbol: "TRX", img: "./tron.png", available: "0.0000", inOrder: "0.0000", total: "0.0000" },
    { id: 10, name: "Pound Sterling", symbol: "GBP", img: "./poundstrling.jpg", available: "£0.0000", inOrder: "£0.0000", total: "£0.0000" },
    { id: 11, name: "Cardano", symbol: "ADA", img: "./cardano.jpg", available: "₳0.0000", inOrder: "₳0.0000", total: "₳0.0000" },
    { id: 12, name: "Canadian Dollar", symbol: "CAD", img: "./canadiandollar.png", available: "C$0.0000", inOrder: "C$0.0000", total: "C$0.0000" },
    { id: 13, name: "BNB", symbol: "BNB", img: "./bnb.png", available: "0.0000", inOrder: "0.0000", total: "0.0000" },
    { id: 14, name: "Bitcoin Cash", symbol: "BCH", img: "./bitcoincash.png", available: "0.0000", inOrder: "0.0000", total: "0.0000" },
    { id: 15, name: "Bitcoin", symbol: "BTC", img: "./bitcoin.jpg", available: "₿0.0000", inOrder: "₿0.0000", total: "₿0.0000" },
    { id: 16, name: "Shiba Inu", symbol: "SHIB", img: "./shiba.png", available: "0.0000", inOrder: "0.0000", total: "0.0000" },
    { id: 17, name: "Taka", symbol: "BDT", img: "./taka.png", available: "0.0000", inOrder: "0.0000", total: "0.0000" },
    { id: 18, name: "Toncoin", symbol: "TON", img: "./toncoin.png", available: "t0.0000", inOrder: "t0.0000", total: "t0.0000" },
    { id: 19, name: "South Korean Won", symbol: "KRW", img: "./southkoreanwon.png", available: "₩0.0000", inOrder: "₩0.0000", total: "₩0.0000" },
    { id: 20, name: "Litecoin", symbol: "LTC", img: "./litecoin.jpg", available: "0.0000", inOrder: "0.0000", total: "0.0000" },
    { id: 21, name: "Polygon", symbol: "MATIC", img: "./polygon.png", available: "0.0000", inOrder: "0.0000", total: "0.0000" },
    { id: 22, name: "Indian Rupee", symbol: "INR", img: "./rupee.jpg", available: "₹0.0000", inOrder: "₹0.0000", total: "₹0.0000" },
    { id: 23, name: "Solana", symbol: "SOL", img: "./solana.png", available: "0.0000", inOrder: "0.0000", total: "0.0000" },
    { id: 24, name: "Euro", symbol: "EUR", img: "./euro.jpg", available: "€0.0000", inOrder: "€0.0000", total: "€0.0000" },
    { id: 25, name: "XRP", symbol: "XRP", img: "./xrp.jpg", available: "0.0000", inOrder: "0.0000", total: "0.0000" },
    { id: 26, name: "Australian Dollar", symbol: "AUD", img: "./australiandollar.png", available: "A$0.0000", inOrder: "A$0.0000", total: "A$0.0000" },
    { id: 27, name: "Tether", symbol: "USDT", img: "./tedher.png", available: "₮0.0000", inOrder: "₮0.0000", total: "₮0.0000" },
    { id: 28, name: "Binance USD", symbol: "BUSD", img: "./binanceusd.jpg", available: "0.0000", inOrder: "0.0000", total: "0.0000" },
    { id: 29, name: "Dai", symbol: "DAI", img: "./dai.png", available: "0.0000", inOrder: "0.0000", total: "0.0000" },
    { id: 30, name: "TrueUSD", symbol: "TUSD", img: "./tureusd.jpg", available: "0.0000", inOrder: "0.0000", total: "0.0000" },
    { id: 31, name: "Polkadot", symbol: "DOT", img: "./polkadot.jpg", available: "0.0000", inOrder: "0.0000", total: "0.0000" },
    { id: 32, name: "Japanese Yen", symbol: "JPY", img: "./japneseyen.jpg", available: "¥0.0000", inOrder: "¥0.0000", total: "¥0.0000" },
    { id: 33, name: "TRON", symbol: "TRX", img: "./tron.png", available: "0.0000", inOrder: "0.0000", total: "0.0000" },
    { id: 34, name: "Pound Sterling", symbol: "GBP", img: "./poundstrling.jpg", available: "£0.0000", inOrder: "£0.0000", total: "£0.0000" }

  ];

    const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState("Spot");
  const walletsPerPage = 10;

  // Shuffle array function
  const shuffleArray = (arr) => [...arr].sort(() => Math.random() - 0.5);

  // Get wallets depending on tab
  const getWalletsForTab = () => {
    if (activeTab === "Spot") return wallets;
    if (activeTab === "Funding") return shuffleArray(wallets);
    if (activeTab === "Future") return shuffleArray(wallets);
  };

  const currentWallets = getWalletsForTab().slice(
    (currentPage - 1) * walletsPerPage,
    currentPage * walletsPerPage
  );

  const totalPages = Math.ceil(getWalletsForTab().length / walletsPerPage);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setCurrentPage(1);
  };

  return (
    <div className="wallet-container">
      <div className="wallet-wrapper">
        {/* <h1 className="wallet-title">Wallet</h1> */}

        <div className="wallet-tabs d-flex justify-content-between mx-4 px-5">
          <h2 className="">Wallet</h2>
          <button className="btn btn-nav px-4" >Spot</button>

          {/* <button className={activeTab === "Spot" ? "tab active" : "tab"} onClick={() => handleTabClick("Spot")}>Spot</button> */}
          {/* <button className={activeTab === "Funding" ? "tab active" : "tab"} onClick={() => handleTabClick("Funding")}>Funding</button>
          <button className={activeTab === "Future" ? "tab active" : "tab"} onClick={() => handleTabClick("Future")}>Future</button> */}
        </div>

        <div className="wallet-card">
          <div className="wallet-header">
            <span>Currency</span>
            <span>Available Balance</span>
            <span>In Order</span>
            <span>Total Balance</span>
            <span>Action</span>
          </div>

          {currentWallets.map((w) => (
            <div key={w.id} className="wallet-row">
              <div className="wallet-info">
                <img src={w.img} alt={w.symbol} className="wallet-icon" />
                <div className="wallet-names">
                  <span className="wallet-name">{w.name}</span>
                  <span className="wallet-symbol">{w.symbol}</span>
                </div>
              </div>
              <span className={w.available === "0.0000" ? "zero-balance" : ""}>{w.available}</span>
              <span className={w.inOrder === "0.0000" ? "zero-balance" : ""}>{w.inOrder}</span>
              <span className={w.total === "0.0000" ? "zero-balance" : ""}>{w.total}</span>
              <button 
                className="wallet-view-btn" 
                onClick={() => navigate(`/wallet/${w.symbol}`)}
              >
                <FaEye className="view-icon" /> View
              </button>
            </div>
          ))}

          <div className="pagination">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                className={currentPage === i + 1 ? "page-btn active" : "page-btn"}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}