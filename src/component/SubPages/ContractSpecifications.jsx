import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import SidebarAccordion from "./SideBarAccordian";

const ContractSpecification = () => {
    const [search, setSearch] = useState("");

   const data = [
  {
    symbol: "XAUUSD",
    description: "Gold vs US-Dollar",
    contractSize: "100",
    minLotSize: "0.01",
    minStep: "0.01",
    leverage: "1:500",
    more: "More",
  },
  {
    symbol: "EURUSD",
    description: "Euro vs US Dollar",
    contractSize: "100,000",
    minLotSize: "0.01",
    minStep: "0.00001",
    leverage: "1:500",
    more: "More",
  },
  {
    symbol: "GBPUSD",
    description: "Great Britain Pound vs US Dollar",
    contractSize: "100,000",
    minLotSize: "0.01",
    minStep: "0.00001",
    leverage: "1:500",
    more: "More",
  },
  {
    symbol: "NAS100",
    description: "NAS100",
    contractSize: "1",
    minLotSize: "0.1",
    minStep: "0.1",
    leverage: "100",
    more: "More",
  },
  {
    symbol: "AUDUSD",
    description: "Australian Dollar vs US Dollar",
    contractSize: "100,000",
    minLotSize: "0.01",
    minStep: "0.00001",
    leverage: "1:500",
    more: "More",
  },
  {
    symbol: "USDJPY",
    description: "US Dollar vs Japanese Yen",
    contractSize: "100,000",
    minLotSize: "0.01",
    minStep: "0.001",
    leverage: "1:500",
    more: "More",
  },
  {
    symbol: "US30",
    description: "Dow Jones 30",
    contractSize: "1",
    minLotSize: "0.1",
    minStep: "1",
    leverage: "100",
    more: "More",
  },
  {
    symbol: "GBPJPY",
    description: "Great Britain Pound vs Japanese Yen",
    contractSize: "100,000",
    minLotSize: "0.01",
    minStep: "0.001",
    leverage: "1:500",
    more: "More",
  },
  {
    symbol: "USDCAD",
    description: "US Dollar vs Canadian Dollar",
    contractSize: "100,000",
    minLotSize: "0.01",
    minStep: "0.00001",
    leverage: "1:500",
    more: "More",
  },
  {
    symbol: "EURJPY",
    description: "Euro vs Japanese Yen",
    contractSize: "100,000",
    minLotSize: "0.01",
    minStep: "0.001",
    leverage: "1:500",
    more: "More",
  },
  {
    symbol: "AUDNZD",
    description: "Australian Dollar vs New Zealand Dollar",
    contractSize: "100,000",
    minLotSize: "0.01",
    minStep: "0.00001",
    leverage: "1:500",
    more: "More",
  },
];


    const filteredData = data.filter(
        (row) =>
            row.symbol.toLowerCase().includes(search.toLowerCase()) ||
            row.description.toLowerCase().includes(search.toLowerCase()) ||
            row.contractSize.toLowerCase().includes(search.toLowerCase())||
            row.minLotSize.toLowerCase().includes(search.toLowerCase()) ||
            row.minStep.toLowerCase().includes(search.toLowerCase()) ||
            row.leverage.toLowerCase().includes(search.toLowerCase()) ||
            row.more.toLowerCase().includes(search.toLowerCase()) 
    );

    const menuItems = [
        "Leverage",
        "Swap Free Accounts",
        "Trading conditions overview",
        "Contract Specifications",
        "Contract Expiries",
        "What are your minimum deposits?",
        "Trading Hour Changes",
        "Why is a triple swap charged?",
        "Who are your liquidity providers?",
        "Restricted Countries",
    ];
    const securityItems = [
        "Segregated Client Accounts",
        "Investor Compensation Fund",
        "Negative Balance Protection",
        "Tier 1 Banking Partners",
    ];

    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                {/* Sidebar with Accordion */}
                <SidebarAccordion></SidebarAccordion>

                {/* Main Content */}
                <div className="col-12 col-md-9 col-lg-6 p-4 my-4 border">
                    {/* Breadcrumb */}
                    <nav aria-label="breadcrumb" className="mb-3">
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
                                Contract Specification
                            </li>
                        </ol>
                    </nav>

                    {/* Title + Date */}
                    <h2 className="fw-bold mb-1">Contract Specification</h2>
                    <p className="text-muted mb-3">Updated on September 2, 2025</p>

                    {/* Server time */}
                    <div className="  bg-light p-2">
                        <h5 className="text-primary">Table Of Contents</h5>
                        <ol>
                            <li>Contract Specification
                                <ol>
                                    <li>Leverage tiers</li>
                                </ol>
                            </li>
                        </ol>
                    </div>

                    {/* Search + Table */}
                    <div className="table-responsive mt-4">
                        <div className="d-flex   mb-2">
                            <select className="form-control " name="" id="">
                            <option value="">Select Category</option>
                            <option value="">Comodities</option>
                            <option value="">Crypto</option>
                            <option value="">Energies</option>
                            <option value="">Forex exotics</option>
                            <option value="">Forex Majors</option>
                            </select>
                            <input
                                type="text"
                                className="form-control form-control-sm w-auto"
                                placeholder="Search..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            <button className="bi bi-search btn btn-primary">Apply</button>
                        </div>

                        <table className="table table-bordered table-hover">
                            <thead className="table-primary">
                                <tr className="">
                                    <th className="p-3">Symbol</th>
                                    <th className="p-3">Currency pair</th>
                                    <th className="p-3">Lot Size</th>
                                    <th className="p-3">Min. Trade Size</th>
                                    <th className="p-3">Min. Pip increment</th>
                                    <th className="p-3">Max Leverage</th>
                                    <th className="p-3">More</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredData.length > 0 ? (
                                    filteredData.map((row, i) => (
                                        <tr key={i}>
                                            <td>{row.symbol}</td>
                                            <td>{row.description}</td>
                                            <td>{row.contractSize}</td>
                                            <td>{row.minLotSize}</td>
                                            <td>{row.minStep}</td>
                                            <td>{row.leverage}</td>
                                            <td>{row.more}</td>
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
                    <div className="table-responsive mt-4 border-top pt-3">
                        <h4>Leverage Tiers</h4>
                        <p>Please see information about our leverage tiers here:</p>
                        <table className="table table-bordered table-hover">
                            <thead className="">
                                <tr>
                                    <th>Equity</th>
                                    <th>Leverage</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>0 to 200,000 (USD)</td>
                                    <td>1 : 500 (FX + Metals)</td>
                                </tr>
                                <tr>
                                    <td>200,000+ (USD)</td>
                                    <td>	Negotiable*</td>
                                </tr>
                            </tbody>
                        </table>
                        <p>*Depends on Trading Volum</p>
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
                            <h5 className="mb-0">Did this answer your question?</h5>
                            <div className="d-flex gap-4 fs-4 text-warning">
                                <i className="bi bi-emoji-smile-fill"></i>
                                <i className="bi bi-emoji-angry-fill"></i>
                                <i className="bi bi-emoji-neutral-fill"></i>
                            </div>
                        </div>

                        {/* Navigation Links */}
                        <div className="d-flex flex-row flex-md-row justify-content-between align-items-start align-items-md-center mt-4">
                            <p className="h6 mb-2 mb-md-0 text-decoration-underline text-primary cursor-pointer">
                                <i className="bi bi-arrow-left me-2"></i>Contract Expiries
                            </p>
                            <p className="h6 text-decoration-underline text-primary cursor-pointer">
                                Trading Hours<i className="bi bi-arrow-right ms-2"></i>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContractSpecification;
