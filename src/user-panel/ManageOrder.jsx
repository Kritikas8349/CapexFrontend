import React, { useState } from "react";
import "./Manageorder.css";
import { BsSearch } from "react-icons/bs";

function ManageOrder() {
  const [activeTab, setActiveTab] = useState("Open");
  const [search, setSearch] = useState("");

  const tabs = ["Open", "Complete", "Pending", "Cancelled", "History"];
   const rows = [
    { date: "-", pair: "-", side: "-", type: "-", amount: "-", rate: "-", charge: "-", total: "-", filled: "-", status: "-" },
    { date: "-", pair: "-", side: "-", type: "-", amount: "-", rate: "-", charge: "-", total: "-", filled: "-", status: "-" },
    { date: "-", pair: "-", side: "-", type: "-", amount: "-", rate: "-", charge: "-", total: "-", filled: "-", status: "-" },
    { date: "-", pair: "-", side: "-", type: "-", amount: "-", rate: "-", charge: "-", total: "-", filled: "-", status: "-" },
    { date: "-", pair: "-", side: "-", type: "-", amount: "-", rate: "-", charge: "-", total: "-", filled: "-", status: "-" },
    { date: "-", pair: "-", side: "-", type: "-", amount: "-", rate: "-", charge: "-", total: "-", filled: "-", status: "-" },
  ];

  return (
    <div className="container-fluid py-4 py-md-5 px-3 px-md-4 bg-light min-vh-100 rounded-3">
      {/* Title */}
      <h2 className="fw-semibold text-start mb-4 text-heading">
        {activeTab} Orders
      </h2>

      {/* Tabs + Filters */}
      <div className="row align-items-center g-3 mb-4">
        {/* Tabs Section */}
        <div className="col-12 col-md-6">
          <div className="d-flex flex-wrap justify-content-start gap-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`btn fw-semibold text-nowrap px-3 py-2 ${activeTab === tab ? "btn-nav" : "btn-outline-secondary"
                  }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Filters Section */}
        <div className="col-12 col-md-6">
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-md-end w-100">
            {/* Dropdown */}
            <select className="form-select form-select-sm w-100 w-sm-auto border-secondary">
              <option>Order Type</option>
              <option>All</option>
              <option>Limit</option>
              <option>Market</option>
            </select>

            {/* Search Bar */}
            <div className="input-group w-100 w-sm-auto" style={{ maxWidth: "350px" }}>
              <span className="input-group-text bg-white border-secondary text-dark">
                <BsSearch />
              </span>
              <input
                type="text"
                className="form-control bg-white text-dark border-secondary"
                placeholder="Search here..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Orders Table / Empty State */}
      
      
        

        {/* Responsive Table */}
        <div className=" table-responsive t">
          <table className="table align-middle text-center mb-0">
            <thead className="table-light">
              <tr>
                <th>Date | Pair</th>
                <th>Side | Type</th>
                <th>Amount | Rate</th>
                <th>Charge | Total</th>
                <th>Filled</th>
                <th>Status</th>
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
                  <td>{row.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty State */}
        <div className="text-center py-5 d-none">
          <img
            src="/emptybox.png"
            alt="No Orders"
            className="img-fluid mb-3"
            style={{ maxWidth: "120px", opacity: 0.8 }}
          />
          <p className="text-secondary mb-0">
            No orders found for <span className="fw-semibold text-dark">Orders</span>
          </p>
        </div>
      
    </div>
    
  );
}

export default ManageOrder;
