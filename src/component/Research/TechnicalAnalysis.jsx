import React, { useState } from "react";
import "./TechnicalAnalysis.css";
import trd from '/public/trd.jpg';

const articles = [
    {
        date: "17 October 2023",
        title: "CSL.ASX",
        description: null,
    },
    {
        date: "20 June 2023",
        title: "NASDAQ – Too Much Froth",
        description: null,
    },
    {
        date: "13 June 2023",
        title: "EBOS: New Buy Zone",
        description: null,
    },
    {
        date: "14 April 2023",
        title: "The VIX vs S&P500",
        description: null,
    },
    {
        date: "31 March 2023",
        title: "NASDAQ Gone too Far?",
        description: null,
    },
    {
        date: "27 March 2023",
        title: "Macquarie: Seeing Value Again",
        description:
            "Technical Analysis: We upgrade Macquarie back to a BUY as a quality diversified banking stock, we see value for medium-term investors, while on a technical chart it appears oversold below $170, where it tends to rebound like it has done so in June 2022, and September 2022 and with key support at $165.",
    },
    {
        date: "13 December 2022",
        title: "Rio Tinto: Profit Taking Zone",
        description:
            "Technical Analysis: Rio Tinto benefitted from strong iron ore boom, and trades in fairly volatile manner. Since the covid sell off its rallied to fresh highs and have been rangebound, being overbought and oversold multiple times, and see current levels (above $155) as an opportune profit taking opportunity and see downside risk from upcoming recession outweigh positivity setting from China reopen currently.",
    },
    {
        date: "30 November 2022",
        title: "BHP (BHP.ASX)",
        description:
            "Technical Analysis: We see BHP shares rise strongly benefiting from multi-year rise in commodity prices, while volatility kicked in post covid as iron ore price surged to above $200/tonne mid last year, to more than halve in a span of 4-months.",
    },
    {
        date: "23 November 2022",
        title: "Auckland International Airport (AIA.NZX)",
        description:
            "Technical Analysis: Auckland International Airport Shares have rebounded strongly on the back of a recovery in international travel. While not quite at pre-covid highs of $9.85, at levels of above $7.80 is still elevated and does not consider the higher interest rate environment meaning it will be harder to justify pre-covid valuations even if International travel had recovered fully (which is still some time away)",
    },
];

function Pagination({ currentPage, totalPages, onPageChange }) {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
        if (
            i === 1 ||
            i === 2 ||
            i === totalPages ||
            i === currentPage ||
            i === currentPage - 1 ||
            i === currentPage + 1
        ) {
            pageNumbers.push(i);
        } else if (
            (i === 3 && currentPage > 4) ||
            (i === totalPages - 1 && currentPage < totalPages - 3)
        ) {
            pageNumbers.push("...");
        }
    }

    const uniquePages = [...new Set(pageNumbers)];

    return (
        <nav className="pagination">
            {uniquePages.map((num, idx) =>
                num === "..." ? (
                    <span key={`dots-${idx}`} className="dots">
                        ...
                    </span>
                ) : (
                    <button
                        key={num}
                        onClick={() => onPageChange(num)}
                        className={`page-btn ${num === currentPage ? "active" : ""}`}
                    >
                        {num}
                    </button>
                )
            )}
            <button
                className="next-btn"
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                Next &rsaquo;
            </button>
        </nav>
    );
}

export default function TechnicalAnalysis() {
    const [currentPage, setCurrentPage] = useState(2);
    const itemsPerPage = 6;

    const totalPages = Math.ceil(articles.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = articles.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div id="Main">

            <div className="news-section" style={{ backgroundImage: `url(${trd})` }}>
                <div className="overlay">
                    <h1 className="news">Technical Analysis </h1>
                    <p className="news-des">
                        Read the latest news and updates on Technical analysis


                    </p>
                </div>
            </div>

            <ul className="article-list">
                {currentItems.map(({ date, title, description }, idx) => (
                    <li key={idx} className="article-item">
                        <a href="#" className="article-link">
                            {date} - {title}
                        </a>
                        {description && <p className="description">{description}</p>}
                        <hr />
                    </li>
                ))}
            </ul>

            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={(page) => {
                    if (page >= 1 && page <= totalPages && page !== currentPage) {
                        setCurrentPage(page);
                    }
                }}
            />
        </div>
    );
}
