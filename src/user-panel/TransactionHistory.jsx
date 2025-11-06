import React from "react";

function TransactionHistory() {
   const rows = [
    { date: "-", pair: "-", side: "-", type: "-", amount: "-", rate: "-", charge: "-", total: "-", filled: "-", account:"-" },
    { date: "-", pair: "-", side: "-", type: "-", amount: "-", rate: "-", charge: "-", total: "-", filled: "-", account:"-" },
    { date: "-", pair: "-", side: "-", type: "-", amount: "-", rate: "-", charge: "-", total: "-", filled: "-", account:"-" },
    { date: "-", pair: "-", side: "-", type: "-", amount: "-", rate: "-", charge: "-", total: "-", filled: "-", account:"-" },
    { date: "-", pair: "-", side: "-", type: "-", amount: "-", rate: "-", charge: "-", total: "-", filled: "-", account:"-" },
    { date: "-", pair: "-", side: "-", type: "-", amount: "-", rate: "-", charge: "-", total: "-", filled: "-", account:"-" },
  ];
  return (
    <div className="container-fluid py-4 py-md-5 px-3 px-md-4 rounded-3 dashboard-container h-100">
      {/* Title */}
      <h2 className="fw-semibold text-heading text-start mb-4">Transactions</h2>

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
            className="btn btn-nav w-100 fw-semibold shadow-sm"
            style={{ padding: "10px 15px", borderRadius: "8px" }}
          >
            <i className="bi bi-filter me-2"></i>Filter
          </button>
        </div>
      </div>

     
       {/* Responsive Table */}
        <div className="mt-3 table-responsive t">
          <table className="table align-middle text-center mb-0">
            <thead className="table-light">
              <tr>
                <th>Currency | Wallet</th>
                <th>Gatway</th>
                <th>Initiated</th>
                <th>Ammount</th>
                <th>Status</th>
                <th>Account</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i}>
                  <td>
                    <div>{row.date}</div>
                    <small className="text-muted">{row.pair}</small>
                  </td>
                  <td>
                    <div>{row.side}</div>
                    <small className="text-muted">{row.type}</small>
                  </td>
                  <td>
                    <div>{row.amount}</div>
                    <small className="text-muted">{row.rate}</small>
                  </td>
                  <td>
                    <div>{row.charge}</div>
                    <small className="text-muted">{row.total}</small>
                  </td>
                  <td>{row.filled}</td>
                  <td>{row.account}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </div>
  );
}

export default TransactionHistory;
