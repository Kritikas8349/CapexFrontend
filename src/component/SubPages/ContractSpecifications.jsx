import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSmile, FaMeh, FaFrown } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import SidebarAccordion from "./SideBarAccordian";

const ContractSpecification = () => {
    const [search, setSearch] = useState("");
     const [feedback, setFeedback] = useState(null);

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
            row.contractSize.toLowerCase().includes(search.toLowerCase()) ||
            row.minLotSize.toLowerCase().includes(search.toLowerCase()) ||
            row.minStep.toLowerCase().includes(search.toLowerCase()) ||
            row.leverage.toLowerCase().includes(search.toLowerCase()) ||
            row.more.toLowerCase().includes(search.toLowerCase())
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
        <div className=" bg-faq py-lg-5 py-md-5 pt-5 mt-lg-2 mx-lg-3 rounded rounded-4">
            <div className="row justify-content-center  my-lg-6 my-md-6 mt-5  bg-transparent">
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
                                Contract Specification
                            </li>
                        </ol>
                    </nav> */}

                    {/* Title + Date */}
                    <h2 className="fw-bold mb-1 text-heading">Contract Specification</h2>
                    <p className="text-white mb-3">Updated on September 2, 2025</p>

                    {/* Server time */}
                    <div className="  bg-transparent border rounded p-2">
                        <h5 className="">Table Of Contents</h5>
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
                                className="form-control form-control-sm w-auto ms-2"
                                placeholder="Search..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            <button className="bi bi-search btn btn-bg-start text-white ms-2">  Apply</button>
                        </div>

                        <div className="table-responsive rounded rounded-3">
                            <table className="table table-bordered  table-hover align-middle mb-0">
                                <thead className="table-primary text-center">
                                    <tr>
                                        <th className="p-3 text-nowrap">Symbol</th>
                                        <th className="p-3 text-nowrap">Currency Pair</th>
                                        <th className="p-3 text-nowrap">Lot Size</th>
                                        <th className="p-3 text-nowrap">Min. Trade Size</th>
                                        <th className="p-3 text-nowrap">Min. Pip Increment</th>
                                        <th className="p-3 text-nowrap">Max Leverage</th>
                                        <th className="p-3 text-nowrap">More</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredData.length > 0 ? (
                                        filteredData.map((row, i) => (
                                            <tr key={i}>
                                                <td className="text-nowrap">{row.symbol}</td>
                                                <td className="text-nowrap">{row.description}</td>
                                                <td className="text-nowrap">{row.contractSize}</td>
                                                <td className="text-nowrap">{row.minLotSize}</td>
                                                <td className="text-nowrap">{row.minStep}</td>
                                                <td className="text-nowrap">{row.leverage}</td>
                                                <td className="text-nowrap">{row.more}</td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="7" className="text-center text-muted py-4">
                                                No matching records found.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>

                    </div>
                    <div className="table-responsive mt-4 border-top  pt-3">
                        <h4>Leverage Tiers</h4>
                        <p>Please see information about our leverage tiers here:</p>
                        <table className="table table-bordered  table-hover">
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
                        <div className="fundinvest-feedback-box p-4">
                            {feedback ? (
                                <p className="thank-you ">Thanks for your Feedback!</p>
                            ) : (
                                <>
                                    <p className="text-dark ">Did this answer your question?</p>
                                    <div className="fundinvest-feedback-icons">
                                        <FaSmile className="feedback-icon" onClick={() => setFeedback("positive")} />
                                        <FaMeh className="feedback-icon" onClick={() => setFeedback("neutral")} />
                                        <FaFrown className="feedback-icon" onClick={() => setFeedback("negative")} />
                                    </div>
                                </>
                            )}
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
