import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

function DepositeHistory() {
  const [search, setSearch] = useState("");

  return (
    <div className="container-fluid py-4 py-md-5 px-3 px-md-4 bg-light min-vh-100">
      {/* ===== Header Section ===== */}
      <div className="row align-items-center g-3 mb-4">
        {/* Title */}
        <div className="col-12 col-md-6 text-center text-md-start">
          <h2 className="fw-semibold mb-0">Deposit History</h2>
        </div>

        {/* Search Bar */}
        <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-end">
          <div className="input-group shadow-sm" style={{ maxWidth: "350px" }}>
            <span className="input-group-text bg-transparent border-secondary text-dark">
              <BsSearch />
            </span>
            <input
              type="text"
              className="form-control bg-transparent text-dark border-secondary"
              placeholder="Search transactions..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* ===== Table / Empty Section ===== */}
      <div className="card border-0 shadow-sm rounded-3">
        <div className="card-body p-3 p-md-4">
          {/* Table Header (Desktop Only) */}
          <div className="row fw-semibold border-bottom pb-2 mb-3 text-secondary d-none d-lg-flex">
            <div className="col">Currency | Wallet</div>
            <div className="col">Gateway | Txn ID</div>
            <div className="col">Initiated</div>
            <div className="col">Amount</div>
            <div className="col">Status</div>
            <div className="col">Action</div>
          </div>

          {/* Empty State */}
          <div
            className="d-flex flex-column justify-content-center align-items-center text-center py-5"
            style={{ minHeight: "300px" }}
          >
            <img
              src="/emptybox.png"
              alt="Empty Transactions"
              className="img-fluid mb-3"
              style={{ maxWidth: "120px", opacity: 0.85 }}
            />
            <p className="text-secondary mb-0 fs-6">No transactions found</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DepositeHistory;


