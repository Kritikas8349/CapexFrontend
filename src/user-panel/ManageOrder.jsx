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
      <div className="row-m align-items-center-m g-3-m mb-4-m">
        {/* Tabs Section */}
        <div className="col-12-m col-md-6-m">
          <div className="d-flex-m flex-wrap-m justify-content-start-m gap-2-m gap-sm-3-m">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`btn-m btn-md-m fw-medium-m text-nowrap-m ${
                  activeTab === tab ? "btn-nav-m" : "text-dark-m"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Filters Section */}
        <div className="col-12-m col-md-6-m">
          <div className="d-flex-m flex-column-m flex-sm-row-m gap-3-m justify-content-center-m justify-content-md-end-m w-100-m">
            <select className="form-select-m form-select-sm-m bg-transparent-m text-dark-m border-dark-m w-100-m w-sm-auto-m">
              <option>Order Type</option>
              <option>All</option>
              <option>Limit</option>
              <option>Market</option>
            </select>

            <div
              className="input-group-m w-100-m w-sm-auto-m"
              style={{ maxWidth: "350px" }}
            >
              <span className="input-group-text-m bg-transparent-m border-secondary-m text-dark-m">
                <BsSearch />
              </span>
              <input
                type="text"
                className="form-control-m bg-transparent-m text-dark-m border-secondary-m"
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
