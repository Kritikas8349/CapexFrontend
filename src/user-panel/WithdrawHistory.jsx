import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

function WithdrawHistory() {
  const [search, setSearch] = useState("");

  return (
    <div className="container-fluid py-4 py-md-5 px-3 px-md-4" style={{ minHeight: "80vh" }}>
      {/* Header Section */}
      <div className="row align-items-center g-3 mb-4">
        <div className="col-12 col-md-6">
          <h2 className="fw-semibold text-start">Withdraw Log</h2>
        </div>

        {/* Search Section */}
        <div className="col-12 col-md-6 d-flex justify-content-md-end justify-content-start">
          <div className="input-group" style={{ maxWidth: "350px", width: "100%" }}>
            <span className="input-group-text bg-transparent border-secondary text-dark">
              <BsSearch />
            </span>
            <input
              type="text"
              className="form-control bg-transparent text-dark border-secondary"
              placeholder="Search transactions"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Table / Content Section */}
      <div
        className="rounded-3 shadow-sm p-4"
        style={{
          background: "#f9fafc",
          borderRadius: "12px",
          minHeight: "60vh",
        }}
      >
        {/* Table Header (Visible only on large screens) */}
        <div
          className="row fw-semibold text-secondary pb-3 mb-3 border-bottom d-none d-lg-flex"
          style={{ fontSize: "14px" }}
        >
          <div className="col">Currency | Wallet</div>
          <div className="col">Gateway | Txn ID</div>
          <div className="col">Initiated</div>
          <div className="col">Amount</div>
          <div className="col">Status</div>
          <div className="col">Action</div>
        </div>

        {/* Empty State (Responsive Centered) */}
        <div
          className="d-flex flex-column justify-content-center align-items-center text-center py-5"
          style={{ minHeight: "50vh" }}
        >
          <img
            src="emptybox.png"
            alt="No Transactions"
            className="img-fluid mb-3"
            style={{ maxWidth: "120px", opacity: 0.8 }}
          />
          <p className="text-dark fs-6 mb-0">No withdraw transactions found</p>
        </div>
      </div>
    </div>
  );
}

export default WithdrawHistory;
