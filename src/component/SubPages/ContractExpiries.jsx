import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import SidebarAccordion from "./SideBarAccordian";

const ContractExpiries = () => {
    const [search, setSearch] = useState("");

    const expiryData = [
        { symbol: "JPN225.f", closeDate: "05/09/2025 (Fri)", expiryDate: "09/09/2025 (Tue)", time: "10:00 a. m." },
        { symbol: "DX.f", closeDate: "09/09/2025 (Tue)", expiryDate: "11/09/2025 (Thu)", time: "10:00 a. m." },
        { symbol: "VIX.f", closeDate: "11/09/2025 (Thu)", expiryDate: "15/09/2025 (Mon)", time: "10:00 a. m." },
        { symbol: "US2000.f", closeDate: "15/09/2025 (Mon)", expiryDate: "17/09/2025 (Wed)", time: "10:00 a. m." },
        { symbol: "UK100.f", closeDate: "15/09/2025 (Mon)", expiryDate: "17/09/2025 (Wed)", time: "10:00 a. m." },
        { symbol: "DE40.f", closeDate: "15/09/2025 (Mon)", expiryDate: "17/09/2025 (Wed)", time: "10:00 a. m." },
        { symbol: "US500.f", closeDate: "15/09/2025 (Mon)", expiryDate: "17/09/2025 (Wed)", time: "10:00 a. m." },
        { symbol: "USTEC.f", closeDate: "15/09/2025 (Mon)", expiryDate: "17/09/2025 (Wed)", time: "10:00 a. m." },
        { symbol: "DJ30.f", closeDate: "15/09/2025 (Mon)", expiryDate: "17/09/2025 (Wed)", time: "10:00 a. m." },
        { symbol: "USOIL.f", closeDate: "16/09/2025 (Tue)", expiryDate: "18/09/2025 (Thu)", time: "10:00 a. m." },
        { symbol: "NGAS.f", closeDate: "19/09/2025 (Fri)", expiryDate: "23/09/2025 (Tue)", time: "10:00 a. m." },
        { symbol: "UKBRENT.f", closeDate: "23/09/2025 (Tue)", expiryDate: "25/09/2025 (Thu)", time: "10:00 a. m." },
        { symbol: "HK50.f", closeDate: "24/09/2025 (Wed)", expiryDate: "26/09/2025 (Fri)", time: "10:00 a. m." }
    ];


    const filteredData = expiryData.filter(
        (row) =>
            row.symbol.toLowerCase().includes(search.toLowerCase()) ||
            row.closeDate.toLowerCase().includes(search.toLowerCase()) ||
            row.expiryDate.toLowerCase().includes(search.toLowerCase()) ||
            row.time.toLowerCase().includes(search.toLowerCase())
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
                                Contract Expiry
                            </li>
                        </ol>
                    </nav>

                    {/* Title + Date */}
                    <h2 className="fw-bold mb-1">Contract Expiry</h2>
                    <p className="text-muted mb-3">Updated on September 2, 2025</p>

                    {/* Server time */}
                    <p className="small">
                        All times are in MT5 server time. <br />
                        The current server time is: <strong>15:09 - 25/09/2025 (GMT +3) </strong>
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
                                    <th>Close Date</th>
                                    <th>Expiry Date</th>
                                    <th>Time (GMT +3)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredData.length > 0 ? (
                                    filteredData.map((row, i) => (
                                        <tr key={i}>
                                            <td>{row.symbol}</td>
                                            <td>{row.closeDate}</td>
                                            <td>{row.expiryDate}</td>
                                            <td>{row.time}</td>
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

export default ContractExpiries;
