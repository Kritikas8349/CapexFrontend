import React from "react";
import "./BlogPartner.css";

const blogPosts = [
  {
    title: "Ways To Get Affiliate Links To Work For You",
    date: "October 2, 2025",
    image: "/off1.jpg",
    description:
      "Consider affiliate promotion if you want to be your own boss or earn extra income. Affiliate links drive traffic to your webpage.",
  },
  {
    title: "What You Need To Be an ETF CFD Trading Promoter",
    date: "September 25, 2025",
    image: "/off2.avif",
    description:
      "Trading ETF CFDs is a specialised financial industry that is quickly gaining prominence. Most online FX brokers now provide customers with ETFs.",
  },
  {
    title: "How to Use Forex Rebates To Improve Your Earnings",
    date: "September 18, 2025",
    image: "/off3.avif",
    description:
      "The Forex market dwarfs others in liquidity and daily trading volume. Forex trading attracts individuals looking for profitable investment opportunities.",
  },
  {
    title: "Understanding Risk Management in Trading",
    date: "September 10, 2025",
    image: "/off4.avif",
    description:
      "Learn how proper risk management strategies can protect your investments and help you trade smarter.",
  },
  {
    title: "Top Strategies for CFD Trading",
    date: "August 30, 2025",
    image: "/off2.avif",
    description:
      "Explore the best CFD trading strategies that professional traders use to maximize profits while managing risks.",
  },
  {
    title: "Beginner’s Guide to Forex Trading",
    date: "August 20, 2025",
    image: "/off4.avif",
    description:
      "A step-by-step guide for beginners to understand Forex trading basics and start trading confidently.",
  },
  {
    title: "Leveraging Technology in Modern Trading",
    date: "August 10, 2025",
    image: "/off5.webp",
    description:
      "Discover how trading technology can streamline operations and improve trading efficiency for modern traders.",
  },
  {
    title: "Common Mistakes New Traders Make",
    date: "July 25, 2025",
    image: "/off3.avif",
    description:
      "Avoid common pitfalls and mistakes that new traders often encounter in the market.",
  },
  {
    title: "Maximizing Earnings with Affiliate Marketing",
    date: "July 15, 2025",
    image: "/off6.avif",
    description:
      "Learn how to maximize your affiliate earnings through effective marketing strategies and promotions.",
  },
];

const BlogPartner = () => {
  return (
    <div className="blog-partner-container">
      {blogPosts.map((post, index) => (
        <div key={index} className="blog-card">
          <img src={post.image} alt={post.title} className="blog-card-image" />
          <h3 className="blog-card-title">{post.title}</h3>
          <p className="blog-card-date">{post.date}</p>
          <p className="blog-card-description">{post.description}</p>
          <a href="#" className="blog-card-link">
            VIEW POST
          </a>
        </div>
      ))}
    </div>
  );
};

export default BlogPartner;
