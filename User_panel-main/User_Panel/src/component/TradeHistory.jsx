import React, { useState } from 'react';
import { BsSearch } from "react-icons/bs";

function TradeHistory() {
  const [search, setSearch] = useState("");

  return (
    <div className="container-fluid py-4 py-md-5 px-3 px-md-4 rounded-3 dashboard-container h-100">
      {/* Header */}
      <div className="row align-items-center g-2 mb-2 py-md-3">
        <div className="col-12 col-md-6">
          <h2 className="fw-semibold text-start">Trading History</h2>
        </div>

        <div className="col-12 col-md-6">
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-md-end w-100">
            <select className="form-select form-select-sm dashboard-container text-dark border-dark w-100 w-sm-auto">
              <option>Order Type</option>
              <option>All</option>
              <option>Limit</option>
              <option>Market</option>
            </select>

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

      {/* Table / Empty Section */}
      <div className="rounded-3 py-3 text-center table-data">
        <div className="row fw-semibold pb-2 mb-3 d-none d-md-flex">
          <h6 className="col">Order Date | Pair</h6>
          <h6 className="col">Trade Date</h6>
          <h6 className="col">Trade Side</h6>
          <h6 className="col">Rate</h6>
          <h6 className="col">Amount</h6>
        </div>

        <div className="py-5">
          <img
            src="emptybox.png"
            alt="Empty Orders"
            className="img-fluid mb-3"
            style={{ maxWidth: "120px", opacity: 0.8 }}
          />
          <p className="text-dark">No orders found</p>
        </div>
      </div>
    </div>
  );
}

export default TradeHistory;
