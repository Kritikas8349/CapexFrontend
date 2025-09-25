import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
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
                                Trading Hour Changes
                            </li>
                        </ol>
                    </nav>

                    {/* Title + Date */}
                    <h2 className="fw-bold mb-1">Trading Hour Changes</h2>
                    <p className="text-muted mb-3">Updated on September 2, 2025</p>

                    {/* Server time */}
                    <p className="small">
                        All times are in MT5 server time. <br />
                        The current server time is: <strong>15:09 - 25/09/2025 (GMT +3)</strong>
                    </p>

                    {/* Search + Table */}
                    <div className="table-responsive mt-4">
                        <div className="d-flex justify-content-end mb-2">
                            <input
                                type="text"
                                className="form-control form-control-sm w-auto"
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
                </div>
            </div>
        </div>
    );
};

export default TradingHourChange;
