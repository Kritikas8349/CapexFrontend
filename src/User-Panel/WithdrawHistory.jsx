import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

function WithdrawHistory() {
  const [search, setSearch] = useState("");
 const rows = [
    { date: "-", pair: "-", side: "-", type: "-", amount: "-", rate: "-", charge: "-", total: "-", filled: "-", account:"-" },
    { date: "-", pair: "-", side: "-", type: "-", amount: "-", rate: "-", charge: "-", total: "-", filled: "-", account:"-" },
    { date: "-", pair: "-", side: "-", type: "-", amount: "-", rate: "-", charge: "-", total: "-", filled: "-", account:"-" },
    { date: "-", pair: "-", side: "-", type: "-", amount: "-", rate: "-", charge: "-", total: "-", filled: "-", account:"-" },
    { date: "-", pair: "-", side: "-", type: "-", amount: "-", rate: "-", charge: "-", total: "-", filled: "-", account:"-" },
    { date: "-", pair: "-", side: "-", type: "-", amount: "-", rate: "-", charge: "-", total: "-", filled: "-", account:"-" },
  ];
  return (
    <div className="container-fluid py-4 py-md-5 px-3 px-md-4" style={{ minHeight: "80vh" }}>
      {/* Header Section */}
      <div className="row align-items-center g-3 mb-4">
        <div className="col-12 col-md-6">
          <h2 className="fw-semibold text-heading text-start">Withdraw Log</h2>
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

     
       {/* Responsive Table */}
        <div className="card table-responsive t">
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

export default WithdrawHistory;
