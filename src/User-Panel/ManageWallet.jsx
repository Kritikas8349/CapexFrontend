import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function ManageWallets() {
  const navigate = useNavigate();

  const wallets = [
    { id: 1, name: "Bitcoin", symbol: "BTC", img: "./bitcoin.jpg", available: "₿0.0000", inOrder: "₿0.0000", total: "₿0.0000" },
    { id: 2, name: "Ethereum", symbol: "ETH", img: "./bnb.png", available: "Ξ0.0000", inOrder: "Ξ0.0000", total: "Ξ0.0000" },
    { id: 3, name: "Tether", symbol: "USDT", img: "./tedher.png", available: "₮0.0000", inOrder: "₮0.0000", total: "₮0.0000" },
    { id: 4, name: "BNB", symbol: "BNB", img: "./bnb.png", available: "0.0000", inOrder: "0.0000", total: "0.0000" },
    { id: 5, name: "Solana", symbol: "SOL", img: "./solana.png", available: "0.0000", inOrder: "0.0000", total: "0.0000" },
    { id: 6, name: "Polygon", symbol: "MATIC", img: "./polygon.png", available: "0.0000", inOrder: "0.0000", total: "0.0000" },
    { id: 7, name: "Cardano", symbol: "ADA", img: "./cardano.jpg", available: "₳0.0000", inOrder: "₳0.0000", total: "₳0.0000" },
    { id: 8, name: "Litecoin", symbol: "LTC", img: "./litecoin.jpg", available: "0.0000", inOrder: "0.0000", total: "0.0000" },
    { id: 9, name: "TRON", symbol: "TRX", img: "./tron.png", available: "0.0000", inOrder: "0.0000", total: "0.0000" },
    { id: 10, name: "XRP", symbol: "XRP", img: "./xrp.jpg", available: "0.0000", inOrder: "0.0000", total: "0.0000" },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const walletsPerPage = 5;
  const totalPages = Math.ceil(wallets.length / walletsPerPage);

  const currentWallets = wallets.slice(
    (currentPage - 1) * walletsPerPage,
    currentPage * walletsPerPage
  );

  return (
    <div className="container-fluid px-lg-5 py-4 py-md-5">
      {/* Header */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-4">
        <h3 className="fw-bold text-heading text-center text-md-start mb-3 mb-md-0">
          Manage Wallets
        </h3>
        <button className="btn btn-nav px-4 py-2 fw-semibold rounded-pill shadow-sm">
          Spot Wallet
        </button>
      </div>

      {/* Table Container */}
      <div className="bg-white shadow-sm rounded-4 p-3 p-md-4">
        {/* Table Header (Desktop Only) */}
        <div className="d-none d-md-flex border-bottom pb-2 mb-2 fw-semibold text-muted small">
          <div className="col-md-3">Currency</div>
          <div className="col-md-2 text-center">Available</div>
          <div className="col-md-2 text-center">In Order</div>
          <div className="col-md-2 text-center">Total</div>
          <div className="col-md-3 text-end">Action</div>
        </div>

        {/* Table Rows */}
        {currentWallets.map((w) => (
          <div
            key={w.id}
            className="row align-items-center py-3 border-bottom mx-0"
          >
            {/* Currency Column */}
            <div className="col-12 col-md-3 d-flex align-items-center mb-2 mb-md-0">
              <img
                src={w.img}
                alt={w.symbol}
                className="me-3 rounded-circle border"
                style={{ width: "40px", height: "40px", objectFit: "cover" }}
              />
              <div>
                <div className="fw-semibold text-dark">{w.name}</div>
                <small className="text-muted">{w.symbol}</small>
              </div>
            </div>

            {/* Balances */}
            <div className="col-4 col-md-2 text-center small text-secondary fw-semibold">
              {w.available}
            </div>
            <div className="col-4 col-md-2 text-center small text-secondary fw-semibold">
              {w.inOrder}
            </div>
            <div className="col-4 col-md-2 text-center small text-secondary fw-semibold">
              {w.total}
            </div>

            {/* Action Button */}
            <div className="col-12 col-md-3 text-center text-md-end mt-3 mt-md-0">
              <button
                className="btn btn-outline-primary btn-sm rounded-pill px-3 py-1 d-inline-flex align-items-center"
                onClick={() => navigate(`/wallet/${w.symbol}`)}
              >
                <FaEye className="me-1" /> View
              </button>
            </div>
          </div>
        ))}

        {/* Pagination */}
        <div className="d-flex justify-content-center mt-4 flex-wrap gap-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              className={`btn btn-sm rounded-pill ${
                currentPage === i + 1
                  ? "btn-primary text-white"
                  : "btn-outline-primary"
              }`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
