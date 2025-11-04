import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

function WithdrawHistory() {
  const [search, setSearch] = useState("");

  const containerStyle = {
    background: "#fff",
    borderRadius: "12px",
    padding: "25px",
    minHeight: "80vh"
  };

  const tableBoxStyle = {
    background: "#f9fafc",
    borderRadius: "12px",
    padding: "20px",
    textAlign: "center",
  };

  const inputGroupStyle = {
    border: "1px solid #9aa0b9",
    borderRadius: "8px",
    overflow: "hidden",
    maxWidth: "350px",
    width: "100%"
  };

  const inputStyle = {
    border: "none",
    fontSize: "14px",
    background: "transparent",
    boxShadow: "none"
  };

  const headingRowStyle = {
    fontWeight: "600",
    fontSize: "14px",
    color: "#2e2f32",
    marginBottom: "8px",
    borderBottom: "1px solid #ccc",
    paddingBottom: "8px"
  };

  return (
    <div className="container-fluid" style={containerStyle}>
      {/* Title + Search */}
      <div className="row align-items-center g-2 mb-3">
        <div className="col-12 col-md-6">
          <h2 className="fw-semibold">Withdraw Log</h2>
        </div>

        {/* Search */}
        <div className="col-12 col-md-6 d-flex justify-content-md-end justify-content-start mt-2 mt-md-0">
          <div className="input-group" style={inputGroupStyle}>
            <span className="input-group-text bg-transparent border-0">
              <BsSearch />
            </span>
            <input
              type="text"
              className="form-control"
              style={inputStyle}
              placeholder="Search transactions"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Table */}
      <div style={tableBoxStyle}>
        {/* Header Row */}
        <div className="row d-none d-lg-flex" style={headingRowStyle}>
          <div className="col">Currency | Wallet</div>
          <div className="col">Gateway | Txn ID</div>
          <div className="col">Initiated</div>
          <div className="col">Amount</div>
          <div className="col">Status</div>
          <div className="col">Action</div>
        </div>

        {/* Empty State */}
        <div className="py-5 text-center">
          <img
            src="emptybox.png"
            alt="empty"
            style={{ maxWidth: "120px", opacity: 0.8 }}
          />
          <p className="mt-2" style={{ fontSize: "15px", color: "#333" }}>
            No withdraw transaction found
          </p>
        </div>
      </div>
    </div>
  );
}

export default WithdrawHistory;
