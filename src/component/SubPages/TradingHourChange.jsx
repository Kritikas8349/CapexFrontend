import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "bootstrap-icons/font/bootstrap-icons.css";
import SidebarAccordion from "./SideBarAccordian";

const TradingHourChange = () => {
    const [search, setSearch] = useState("");

    const tradingData = [
        { symbol: "Cryptos", type: "Cryptos", dateInfo: "Normal Hours" },
        { symbol: "UKOIL", type: "Energies", dateInfo: "Early Close 20:30" },
        { symbol: "USOIL", type: "Energies", dateInfo: "Early Close 21:30" },
        { symbol: "DE40.f", type: "Expiring Futures", dateInfo: "Early Close 23:00" },
        { symbol: "DJ30.f", type: "Expiring Futures", dateInfo: "Early Close 20:00" },
        { symbol: "DX.f", type: "Expiring Futures", dateInfo: "Normal Hours" },
        { symbol: "HK50.f", type: "Expiring Futures", dateInfo: "Normal Hours" },
    ];

    const filteredData = tradingData.filter(
        (row) =>
            row.symbol.toLowerCase().includes(search.toLowerCase()) ||
            row.type.toLowerCase().includes(search.toLowerCase()) ||
            row.dateInfo.toLowerCase().includes(search.toLowerCase())
    );

   const Sections = [
  {
    title: "Trading Conditions",
    icon: "bi bi-graph-up-arrow",
    items: [
      { label: "Leverage" },
      { label: "Swap Free Accounts" },
      { label: "Trading conditions overview" },
      { label: "Contract Specifications" },
      { label: "Contract Expiries" },
      { label: "What are your minimum deposits?" },
      { label: "Trading Hour Changes", active: true }, // active key added
      { label: "Why is a triple swap charged?" },
      { label: "Who are your liquidity providers?" },
      { label: "Restricted Countries" },
    ],
  },
  {
    title: "Security of Funds",
    icon: "bi bi-bank",
    items: [
      { label: "Segregated Client Accounts" },
      { label: "Investor Compensation Fund" },
      { label: "Negative Balance Protection" },
      { label: "Tier 1 Banking Partners" }
    ],
  }
];

    

  

    return (
        <div className="container-fluid bg-faq py-lg-5 py-md-5 pt-5 ">
            <div className="row justify-content-center my-lg-6 my-md-6 mt-5  bg-transparent">
                {/* Sidebar with Accordion */}
                <SidebarAccordion className="bg-transparent" Sections={Sections}></SidebarAccordion>

                {/* Main Content */}
                <div className="col-12 bg-transparent  col-md-9 col-lg-6 p-4 my-4 text-start bg-home">
                    {/* Breadcrumb */}
                    {/* <nav aria-label="breadcrumb" className="mb-5">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <Link to="#">Home</Link>
                            </li>
                            <li className="breadcrumb-item">
                                <Link to="#">Support</Link>
                            </li>
                            <li className="breadcrumb-item">
                                <Link to="#">Market Support</Link>
                            </li>
                            <li className="breadcrumb-item">
                                <Link to="#">Trading Conditions</Link>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">
                                Trading Hour Changes
                            </li>
                        </ol>
                    </nav> */}

                    {/* Title + Date */}
                    <h2 className="fw-bold text-heading mb-1">Trading Hour Changes</h2>
                    <p className="text-white mb-3">Updated on September 2, 2025</p>

                    {/* Server time */}
                    <p className="small">
                        All times are in MT5 server time. <br />
                        The current server time is: <strong>15:09 - 25/09/2025 (GMT +3) </strong>
                    </p>

                    {/* Search + Table */}
                    <div className="table-responsive mt-4">
                        <div className="d-flex mb-2">
                            <input
                                type="text"
                                className="form-control w-25"
                                placeholder="Search..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>

                        <table className="table table-bordered table-hover">
                            <thead className="table-primary">
                                <tr>
                                    <th>Symbol</th>
                                    <th>Type</th>
                                    <th>Monday, September 1, 2025</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredData.length > 0 ? (
                                    filteredData.map((row, i) => (
                                        <tr key={i}>
                                            <td>{row.symbol}</td>
                                            <td>{row.type}</td>
                                            <td>{row.dateInfo}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="3" className="text-center text-muted">
                                            No matching records found.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                    {/* Other links and feedback */}
                     <div className="my-4">
                        {/* Share Section */}
                        <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center gap-2 mb-4">
                            <h6 className="mb-0">Share this to:</h6>
                            <div className="d-flex gap-3 fs-5 text-primary">
                                <i className="bi bi-facebook"></i>
                                <i className="bi bi-twitter-x"></i>
                                <i className="bi bi-linkedin"></i>
                            </div>
                        </div>

                        {/* Feedback Section */}
                        <div className="p-4 border rounded d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3 bg-light-subtle">
                            <h5 className="mb-0 text-dark">Did this answer your question?</h5>
                            <div className="d-flex gap-4 fs-4 text-warning">
                                <i className="bi bi-emoji-smile-fill"></i>
                                <i className="bi bi-emoji-angry-fill"></i>
                                <i className="bi bi-emoji-neutral-fill"></i>
                            </div>
                        </div>

                        {/* Navigation Links */}
                        <div className="d-flex flex-row flex-md-row justify-content-between align-items-start align-items-md-center mt-4">
                            <p className="h6 mb-2 mb-md-0  text-heading cursor-pointer">
                                <i className="bi bi-arrow-left me-2"></i>Contract Expiries
                            </p>
                            <p className="h6 text-decoration text-heading cursor-pointer">
                                Trading Hours<i className="bi bi-arrow-right ms-2"></i>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TradingHourChange;
