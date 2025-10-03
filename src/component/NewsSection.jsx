import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { HiOutlineMenu } from 'react-icons/hi';
import { FaSearch } from "react-icons/fa";

import "./NewsSection.css";

const articles = [
  {
    image: "/public/trade1.avif",
    title: "Enhanced Prime Account Offering with Zero Spreads on Forex Majors",
    description:
      "Prime clients will now see zero spreads through most of the trading day, representing a 48% to 71% reduction.",
    date: "September 18, 2025",
    link: "#",
  },
  {
    image: "/public/trade2.avif",
    title: "Market.trad to Attend Forex Expo Dubai 2025",
    description:
      "Market.trad will be participating in Forex Expo Dubai 2025, on 6 Oct 2025 at the Dubai World Trade Centre.",
    date: "September 4, 2025",
    link: "#",
  },
  {
    image: "/public/trade3.avif",
    title: "Market.trad launches 24/5 trading on U.S. stocks",
    description:
      "Market.trad is pleased to announce the launch of 24/5 trading on a wide range of U.S. stock CFDs.",
    date: "August 7, 2025",
    link: "#",
  },
  {
    image: "/public/awards.jpg",
    title: "Global Trading Awards – Best Execution Broker 2025",
    description:
      "We’re honored to be awarded Best Execution Broker 2025 at the Global Trading Awards.",
    date: "July 15, 2025",
    link: "#",
  },
  {
    image: "/public/tarde4.avif",
    title: "BlackBull expands cryptocurrency CFD offerings",
    description:
      "New crypto pairs have been added to the Market.trad platform for more diversified trading.",
    date: "June 30, 2025",
    link: "#",
  },
  {
    image: "/public/trade5.avif",
    title: "New Office Opens in Singapore to Serve Asian Clients",
    description:
      "Market.trad is proud to open its new regional office in Singapore to enhance service in the Asian region.",
    date: "June 1, 2025",
    link: "#",
  },
  {
    image: "/public/trade6.avif",
    title: "New Office Opens in Singapore to Serve Asian Clients",
    description:
      "Market.trad is proud to open its new regional office in Singapore to enhance service in the Asian region.",
    date: "June 1, 2025",
    link: "#",
  },
  {
    image: "/public/trade1.avif",
    title: "New Office Opens in Singapore to Serve Asian Clients",
    description:
      "Market.trad is proud to open its new regional office in Singapore to enhance service in the Asian region.",
    date: "June 1, 2025",
    link: "#",
  },
  {
    image: "/public/trade2.avif",
    title: "New Office Opens in Singapore to Serve Asian Clients",
    description:
      "Market.trad is proud to open its new regional office in Singapore to enhance service in the Asian region.",
    date: "June 1, 2025",
    link: "#",
  },
];

const NewsSection = () => {
  return (
    
    <div className="news">
    <div className="news-container">
      <h2 className="news-heading">Company News</h2>
      <div className="news-grid">
        {articles.map((article, index) => (
          <div className="news-card" key={index}>
            <img src={article.image} alt={article.title} className="news-img" />
            <div className="news-content">
              <h3 className="news-title">{article.title}</h3>
              <p className="news-desc">{article.description}</p>
              <div className="news-footer">
                <span className="news-date">{article.date}</span>
                <a href={article.link} className="news-readmore">
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
        
    </div>
  );
};

export default NewsSection;