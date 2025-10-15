import React, { useState } from "react";
import './Manageorder.css'


function ManageOrder() {
    const [activeTab, setActiveTab] = useState("Open");

    const tabs = ["Open", "Complete", "Pending", "Cancelled", "History"];

    return (
        <div className="container py-4 py-md-5 py-lg-5 mx-0 rounded-3 dashboard-container min-vh-100">
            {/* Title */}
            <h2 className="fw-semibold  text-start text-md-start text-lg-start">
                {activeTab} Orders
            </h2>

            {/* Navigation + Filters */}
            <div className="row align-items-center g-2 mb-4 py-md-3 py-lg-3">
                {/* Tabs Section */}
                <div className="col-12 col-md-6 ">
                    <div className="d-flex flex-wrap justify-content-start justify-content-md-start gap-2 gap-sm-3">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                className={`btn btn-md fw-medium text-nowrap ${activeTab === tab
                                    ? "btn-nav"
                                    : "text-dark "
                                    }`}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Filters Section */}
                <div className="col-12 col-md-6   ">
                    <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-md-end">
                        <select className="form-select form-select-sm bg-transparent text-dark border-dark">
                            <option>Order Type</option>
                            <option>All</option>
                            <option>Limit</option>
                            <option>Market</option>
                        </select>

                        {/* <select className="form-select form-select-sm bg-dark text-white border-light">
                            <option>Status</option>
                            <option>All</option>
                            <option>Active</option>
                            <option>Completed</option>
                        </select> */}

                        <div class="input-group w-50">
                            <input
                                type="text"
                                class="form-control bg-transparent border-dark text-dark custom-placeholder"
                                placeholder="Pair, coin....."
                                aria-label="Search"
                            />
                            <button class="btn btn-outline-dark p-0 px-1" type="button">
                                <i class="bi bi-search"></i>
                            </button>
                        </div>



                    </div>
                </div>
            </div>

            {/* Table / Empty Section */}
            <div className=" rounded-3  py-3 text-center  table-data">
                <div className="row  fw-semibold  pb-2 mb-3 d-none d-lg-flex">
                    <h6 className="col">Date | Pair</h6>
                    <h6 className="col">Side | Type</h6>
                    <h6 className="col">Amount | Rate</h6>
                    <h6 className="col">Charge | Total</h6>
                    <h6 className="col">Filled</h6>
                    <h6 className="col">Status</h6>
                </div>

                <div className="py-5">
                    <img
                        src="emptybox.png"
                        alt="Empty Orders"
                        className="img-fluid mb-3"
                        style={{ maxWidth: "120px", opacity: 0.8 }}
                    />
                    <p className="text-dark">No orders found for {activeTab}</p>
                </div>
            </div>
        </div>
    );
}

export default ManageOrder;