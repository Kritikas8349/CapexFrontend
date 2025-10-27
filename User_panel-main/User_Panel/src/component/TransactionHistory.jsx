import React from "react";

function TransactionHistory() {
  return (
    <div className="container-fluid py-4 py-md-5 px-3 px-md-4 rounded-3 dashboard-container h-100">
      {/* Title */}
      <h2 className="fw-semibold text-start my-4">Transactions</h2>

      {/* Filter Section */}
      <div className="row g-3 align-items-end rounded-3 p-3 table-data">
        {/* Transaction Number */}
        <div className="col-12 col-md-6 col-lg">
          <label htmlFor="transactionNumber" className="form-label fw-semibold">
            Transaction Number
          </label>
          <input
            type="text"
            id="transactionNumber"
            className="form-control"
            placeholder="Enter transaction number"
          />
        </div>

        {/* Currency */}
        <div className="col-12 col-md-6 col-lg">
          <label htmlFor="currency" className="form-label fw-semibold">
            Currency
          </label>
          <select id="currency" className="form-select">
            <option value="">All</option>
            <option value="BTC">BTC</option>
            <option value="EUR">EUR</option>
            <option value="ETH">ETH</option>
            <option value="INR">INR</option>
          </select>
        </div>

        {/* Type */}
        <div className="col-12 col-md-6 col-lg">
          <label htmlFor="type" className="form-label fw-semibold">
            Type
          </label>
          <select id="type" className="form-select">
            <option value="">All</option>
            <option value="Deposit">Deposit</option>
            <option value="Withdraw">Withdraw</option>
            <option value="Transfer">Transfer</option>
          </select>
        </div>

        {/* Remark */}
        <div className="col-12 col-md-6 col-lg">
          <label htmlFor="remark" className="form-label fw-semibold">
            Remark
          </label>
          <select id="remark" className="form-select">
            <option value="">All</option>
            <option value="Success">Success</option>
            <option value="Pending">Pending</option>
            <option value="Failed">Failed</option>
          </select>
        </div>

        {/* Filter Button */}
        <div className="col-12 col-md-6 col-lg-auto">
          <button className="btn btn-primary w-100 mt-2 mt-lg-0 fw-semibold">
            <i className="bi bi-filter me-2"></i>Filter
          </button>
        </div>
      </div>

      {/* Table Section */}
      <div className="rounded-3 py-4 mt-4 text-center table-data">
        {/* Table Header (Visible on large screens only) */}
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
          <p className="text-dark fs-6">No transaction history found</p>
        </div>
      </div>
    </div>
  );
}

export default TransactionHistory;
