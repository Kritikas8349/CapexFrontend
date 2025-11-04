import React, { useState } from "react";
import "./Manageorder.css";
import { BsSearch } from "react-icons/bs";

function ManageOrder() {
  const [activeTab, setActiveTab] = useState("Open");
  const [search, setSearch] = useState("");

  const tabs = ["Open", "Complete", "Pending", "Cancelled", "History"];

  return (
    <div className="container-fluid py-4 py-md-5 px-3 px-md-4 bg-light min-vh-100 rounded-3">
      {/* Title */}
      <h2 className="fw-semibold text-start mb-4 text-primary">
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
                className={`btn fw-semibold text-nowrap px-3 py-2 ${
                  activeTab === tab ? "btn-primary" : "btn-outline-secondary"
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
      <div className="card border-0 shadow-sm">
        <div className="card-body text-center p-4">
          {/* Table Header for Desktop */}
          <div className="row fw-semibold text-muted border-bottom pb-2 mb-3 d-none d-md-flex">
            <div className="col">Date | Pair</div>
            <div className="col">Side | Type</div>
            <div className="col">Amount | Rate</div>
            <div className="col">Charge | Total</div>
            <div className="col">Filled</div>
            <div className="col">Status</div>
          </div>

          {/* Empty State */}
          {/* Empty State (Centered) */}
<div className="d-flex flex-column justify-content-center align-items-center py-5" style={{ minHeight: "300px" }}>
  <img
    src="/emptybox.png"
    alt="No Orders"
    className="img-fluid mb-3"
    style={{ maxWidth: "120px", opacity: 0.8 }}
  />
  <p className="text-secondary mb-0">
    No orders found for <span className="fw-semibold text-dark">{activeTab}</span>
  </p>
</div>

        </div>
      </div>
    </div>
  );
}

export default ManageOrder;
