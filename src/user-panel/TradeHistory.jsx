import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

function TradeHistory() {
  const [search, setSearch] = useState("");

  return (
    <div className="container-fluid py-4 py-md-5 px-3 px-md-4 rounded-3 dashboard-container min-vh-100 bg-light">
      {/* ===== Header Section ===== */}
      <div className="row align-items-center g-3 mb-4">
        {/* Title */}
        <div className="col-12 col-md-6 text-center text-md-start">
          <h2 className="fw-semibold mb-0">Trading History</h2>
        </div>

        {/* Filters */}
        <div className="col-12 col-md-6">
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-md-end w-100">
            {/* Order Type Dropdown */}
            <select className="form-select form-select-sm text-dark border-dark w-100 w-sm-auto">
              <option>Order Type</option>
              <option>All</option>
              <option>Limit</option>
              <option>Market</option>
            </select>

            {/* Search Bar */}
            <div className="input-group w-100 w-sm-auto" style={{ maxWidth: "350px" }}>
              <span className="input-group-text bg-transparent border-secondary text-dark">
                <BsSearch />
              </span>
              <input
                type="text"
                className="form-control bg-transparent text-dark border-secondary"
                placeholder="Search here..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ===== Table Section / Empty State ===== */}
      <div className="card shadow-sm border-0">
        <div className="card-body p-3">
          {/* Table Header */}
          <div className="row fw-semibold border-bottom pb-2 mb-3 d-none d-md-flex text-secondary">
            <div className="col">Order Date | Pair</div>
            <div className="col">Trade Date</div>
            <div className="col">Trade Side</div>
            <div className="col">Rate</div>
            <div className="col">Amount</div>
          </div>

          {/* Empty State (Centered) */}
          <div
            className="d-flex flex-column justify-content-center align-items-center text-center py-5"
            style={{ minHeight: "300px" }}
          >
            <img
              src="/emptybox.png"
              alt="Empty Orders"
              className="img-fluid mb-3"
              style={{ maxWidth: "120px", opacity: 0.8 }}
            />
            <p className="text-secondary mb-0 fs-6">
              No trade history found
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TradeHistory;
