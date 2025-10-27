import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

function DepositeHistory() {
  const [search, setSearch] = useState("");

  return (
    <div className="container py-4 py-md-5 py-lg-5 mx-0 rounded-3 dashboard-container h-100">
      {/* Title */}
      <div className="row align-items-center g-2 mb-2 py-md-3 py-lg-3">
        {/* Title Section */}
        <div className="col-12 col-md-6">
          <h2 className="fw-semibold text-start text-md-start text-lg-start">
            Deposit History
          </h2>
        </div>

        {/* Search Section */}
        <div className="col-12 col-md-6">
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-md-end">
            <div className="input-group w-100 w-md-50" style={{ maxWidth: "350px" }}>
              <span className="input-group-text bg-transparent border-secondary text-dark">
                <BsSearch />
              </span>
              <input
                type="text"
                className="form-control bg-transparent text-dark border-secondary"
                placeholder="Search by transactions"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Table / Empty Section */}
      <div className="rounded-3 py-3 text-center table-data">
        {/* Header Row (visible on large screens) */}
        <div className="row fw-semibold pb-2 mb-3 d-none d-lg-flex">
          <h6 className="col">Currency | Wallet</h6>
          <h6 className="col">Gateway | Transaction</h6>
          <h6 className="col">Initiated</h6>
          <h6 className="col">Amount</h6>
          <h6 className="col">Status</h6>
          <h6 className="col">Action</h6>
        </div>

        {/* Empty State */}
        <div className="py-5">
          <img
            src="emptybox.png"
            alt="Empty Orders"
            className="img-fluid mb-3"
            style={{ maxWidth: "120px", opacity: 0.8 }}
          />
          <p className="text-dark">No transactions found</p>
        </div>
      </div>
    </div>
  );
}

export default DepositeHistory;
