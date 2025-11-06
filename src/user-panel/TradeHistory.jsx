import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

function TradeHistory() {
  const [search, setSearch] = useState("");
  const rows = [
    { date: "-", pair: "-", side: "-", type: "-", amount: "-", rate: "-", charge: "-", total: "-", filled: "-" },
    { date: "-", pair: "-", side: "-", type: "-", amount: "-", rate: "-", charge: "-", total: "-", filled: "-" },
    { date: "-", pair: "-", side: "-", type: "-", amount: "-", rate: "-", charge: "-", total: "-", filled: "-" },
    { date: "-", pair: "-", side: "-", type: "-", amount: "-", rate: "-", charge: "-", total: "-", filled: "-" },
    { date: "-", pair: "-", side: "-", type: "-", amount: "-", rate: "-", charge: "-", total: "-", filled: "-" },
    { date: "-", pair: "-", side: "-", type: "-", amount: "-", rate: "-", charge: "-", total: "-", filled: "-" },
  ];

  return (
    <div className="container-fluid py-4 py-md-5 px-3 px-md-4 rounded-3 dashboard-container min-vh-100 bg-light">
      {/* ===== Header Section ===== */}
      <div className="row align-items-center g-3 mb-4">
        {/* Title */}
        <div className="col-12 col-md-6 text-center text-md-start">
          <h2 className="fw-semibold text-heading mb-0">Trading History</h2>
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

      

       {/* Responsive Table */}
        <div className=" table-responsive t">
          <table className="table align-middle text-center mb-0">
            <thead className="table-light">
              <tr>
                <th>Date | Pair</th>
                <th>Trade Date</th>
                <th>Trade Side</th>
                <th>Rate</th>
                <th>Ammount</th>
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
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </div>
  );
}

export default TradeHistory;
