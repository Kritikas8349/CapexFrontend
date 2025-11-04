import React from "react";

function TransactionHistory() {
  return (
    <div className="container-fluid py-4 py-md-5 px-3 px-md-4 rounded-3 dashboard-container h-100">
      {/* Title */}
      <h2 className="fw-semibold text-start mb-4">Transactions</h2>

      {/* Filter Section */}
      <div
        className="row g-3 align-items-end p-3 rounded-4"
        style={{
          background: "#f8fafc",
          border: "1px solid #dee2e6",
          boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
        }}
      >
        {/* Transaction Number */}
        <div className="col-12 col-md-6 col-lg">
          <label htmlFor="transactionNumber" className="form-label fw-semibold small text-secondary">
            Transaction Number
          </label>
          <input
            type="text"
            id="transactionNumber"
            className="form-control shadow-sm"
            placeholder="Enter transaction number"
          />
        </div>

        {/* Currency */}
        <div className="col-12 col-md-6 col-lg">
          <label htmlFor="currency" className="form-label fw-semibold small text-secondary">
            Currency
          </label>
          <select id="currency" className="form-select shadow-sm">
            <option value="">All</option>
            <option value="BTC">BTC</option>
            <option value="EUR">EUR</option>
            <option value="ETH">ETH</option>
            <option value="INR">INR</option>
          </select>
        </div>

        {/* Type */}
        <div className="col-12 col-md-6 col-lg">
          <label htmlFor="type" className="form-label fw-semibold small text-secondary">
            Type
          </label>
          <select id="type" className="form-select shadow-sm">
            <option value="">All</option>
            <option value="Deposit">Deposit</option>
            <option value="Withdraw">Withdraw</option>
            <option value="Transfer">Transfer</option>
          </select>
        </div>

        {/* Remark */}
        <div className="col-12 col-md-6 col-lg">
          <label htmlFor="remark" className="form-label fw-semibold small text-secondary">
            Remark
          </label>
          <select id="remark" className="form-select shadow-sm">
            <option value="">All</option>
            <option value="Success">Success</option>
            <option value="Pending">Pending</option>
            <option value="Failed">Failed</option>
          </select>
        </div>

        {/* Filter Button */}
        <div className="col-12 col-md-6 col-lg-auto">
          <button
            className="btn btn-primary w-100 fw-semibold shadow-sm"
            style={{ padding: "10px 15px", borderRadius: "8px" }}
          >
            <i className="bi bi-filter me-2"></i>Filter
          </button>
        </div>
      </div>

      {/* Table Section */}
      <div
        className="rounded-4 py-4 mt-4 text-center"
        style={{
          background: "#fff",
          border: "1px solid #dee2e6",
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
          minHeight: "50vh",
        }}
      >
        {/* Table Header (Desktop only) */}
        <div className="row fw-semibold pb-2 mb-3 d-none d-lg-flex text-secondary border-bottom">
          <div className="col">Currency | Wallet</div>
          <div className="col">Gateway | Transaction</div>
          <div className="col">Initiated</div>
          <div className="col">Amount</div>
          <div className="col">Status</div>
          <div className="col">Action</div>
        </div>

        {/* Empty State */}
        <div
          className="d-flex flex-column justify-content-center align-items-center py-5"
          style={{ height: "100%" }}
        >
          <img
            src="emptybox.png"
            alt="Empty Orders"
            className="img-fluid mb-3"
            style={{
              maxWidth: "120px",
              opacity: 0.85,
              filter: "grayscale(30%)",
            }}
          />
          <p className="text-secondary fs-6 mb-0">No transaction history found</p>
        </div>
      </div>
    </div>
  );
}

export default TransactionHistory;
