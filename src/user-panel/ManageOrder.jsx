import React, { useState } from "react";
import "./Manageorder.css";
import { BsSearch } from "react-icons/bs";

function ManageOrder() {
  const [activeTab, setActiveTab] = useState("Open");
  const [search, setSearch] = useState("");

  const tabs = ["Open", "Complete", "Pending", "Cancelled", "History"];

  return (
    <div className="container-fluid-m py-4-m py-md-5-m px-3-m px-md-4-m rounded-3-m dashboard-container-m min-vh-100-m">
      {/* Title */}
      <h2 className="fw-semibold-m text-start-m mb-3-m">{activeTab} Orders</h2>

      {/* Navigation + Filters */}
      <div className="row align-items-center g-3 mb-4">
  {/* Tabs Section */}
  <div className="col-12 col-md-6">
    <div className="d-flex flex-wrap justify-content-start gap-2 gap-sm-3">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`btn fw-medium text-nowrap ${
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
      {/* Order Type Dropdown */}
      <select className="form-select form-select-sm w-100 w-sm-auto">
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


      {/* Table / Empty Section */}
      <div className="rounded-3-m py-3-m text-center-m table-data-m">
        <div className="row-m fw-semibold-m pb-2-m mb-3-m d-none-m d-md-flex-m">
          <h6 className="col-m">Date | Pair</h6>
          <h6 className="col-m">Side | Type</h6>
          <h6 className="col-m">Amount | Rate</h6>
          <h6 className="col-m">Charge | Total</h6>
          <h6 className="col-m">Filled</h6>
          <h6 className="col-m">Status</h6>
        </div>

        <div className="py-5-m">
          <img
            src="emptybox.png"
            alt="Empty Orders"
            className="img-fluid-m mb-3-m"
            style={{ maxWidth: "120px", opacity: 0.8 }}
          />
          <p className="text-dark-m">No orders found for {activeTab}</p>
        </div>
      </div>
    </div>
  );
}

export default ManageOrder;
