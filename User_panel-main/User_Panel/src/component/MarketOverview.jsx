import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsSearch, BsCurrencyBitcoin } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function MarketOverview() {

  const [activeTab, setActiveTab] = useState("All");
  const [search, setSearch] = useState("");

  const navigate = useNavigate()

  const coins = [
    {
      pair: "BTC_USDT",
      price: "3896.3802",
      change1h: "0.3433%",
      change24h: "2.6602%",
      marketcap: "470287996243.9293",
      icon: "/tedher.png "
    },
    {
      pair: "USDT_USD",
      price: "1.0005",
      change1h: "0.01%",
      change24h: "0.01%",
      marketcap: "175812931819.3300",
      icon: "/tedher.png "
    },
    {
      pair: "BTC_USD",
      price: "120,631.5432",
      change1h: "0.16%",
      change24h: "2.58%",
      marketcap: "2403969881508.6001",
      icon: "/tedher.png "
    },
    {
      pair: "BNB_EUR",
      price: "923.7162",
      change1h: "0.68%",
      change24h: "5.86%",
      marketcap: "128567688439.9000",
      icon: "/tedher.png"
    },
    {
      pair: "ETH_BTC",
      price: "0.0372",
      change1h: "0.16%",
      change24h: "3.92%",
      marketcap: "4495494.5408",
      icon: "/tedher.png"
    },
    {
      pair: "BTC_USDC",
      price: "1.0002",
      change1h: "0.0118%",
      change24h: "0.0207%",
      marketcap: "181363822076.2277",
      icon: "/tedher.png",
    },
    {
      pair: "BTC_USDT",
      price: "3896.3802",
      change1h: "0.3433%",
      change24h: "2.6602%",
      marketcap: "470287996243.9293",
      icon: "/tedher.png "
    },
    {
      pair: "USDT_USD",
      price: "1.0005",
      change1h: "0.01%",
      change24h: "0.01%",
      marketcap: "175812931819.3300",
      icon: "/tedher.png "
    },
    {
      pair: "BTC_USD",
      price: "120,631.5432",
      change1h: "0.16%",
      change24h: "2.58%",
      marketcap: "2403969881508.6001",
      icon: "/tedher.png "
    },
    {
      pair: "BNB_EUR",
      price: "923.7162",
      change1h: "0.68%",
      change24h: "5.86%",
      marketcap: "128567688439.9000",
      icon: "/tedher.png"
    },
    {
      pair: "ETH_BTC",
      price: "0.0372",
      change1h: "0.16%",
      change24h: "3.92%",
      marketcap: "4495494.5408",
      icon: "/tedher.png"
    },
    {
      pair: "BTC_USDC",
      price: "1.0002",
      change1h: "0.0118%",
      change24h: "0.0207%",
      marketcap: "181363822076.2277",
      icon: "/tedher.png",
    },
  ];

  const filteredCoins = coins.filter((coin) =>
    coin.pair.toLowerCase().includes(search.toLowerCase())
  );
  const wallets = [
    {
      top: "Top Exchanges Coin",
      items: [
        { id: 1, name: "USDT", img: "/tedher.png", price: "$1.0004", change: "0.01%", color: "text-danger" },
        { id: 2, name: "BTC", img: "/xrp.jpg", price: "$120,758.7856", change: "0.07%", color: "text-danger" },
        { id: 3, name: "BNB", img: "/binanceusd.jpg", price: "$1,086.0861", change: "0.85%", color: "text-success" },
        { id: 4, name: "DOT", img: "/australiandollar.png", price: "$4.3273", change: "0.09%", color: "text-success" },
      ],
    },
    {
      top: "Highlight Coin",
      items: [
        { id: 1, name: "BTC", img: "/xrp.jpg", price: "$120,758.7856", change: "0.07%", color: "text-danger" },
        { id: 2, name: "ETH", img: "/australiandollar.png", price: "$4,497.5629", change: "0.16%", color: "text-success" },
        { id: 3, name: "DOGE", img: "/binanceusd.jpg", price: "$0.2617", change: "0.88%", color: "text-success" },
        { id: 4, name: "TON", img: "/tedher.png", price: "$2.8578", change: "0.33%", color: "text-danger" },
      ],
    },
    {
      top: "New Coin",
      items: [
        { id: 1, name: "BTC", img: "/xrp.jpg", price: "$120,758.7856", change: "0.07%", color: "text-danger" },
        { id: 2, name: "ETH", img: "/australiandollar.png", price: "$4,497.5629", change: "0.16%", color: "text-success" },
        { id: 3, name: "XRP", img: "/binanceusd.jpg", price: "$3.0621", change: "0.28%", color: "text-danger" },
        { id: 4, name: "USDT", img: "/tedher.png", price: "$1.0004", change: "0.01%", color: "text-danger" },
      ],
    },
  ];

  function tradeClick() {
    navigate('/trade')
  }

  return (
    <div className="dashboard-container text-white py-5">
      {/* ---top---- */}
      <div className="container  px-md-5">
        {/* Heading */}
        <div className="text-start mb-5">
          <h3 className="fw-bold text-heading">Markets Overview</h3>
          <p className="text-secondary">
            Explore your favorite coin pair on Vinance
          </p>
        </div>

        {/* Responsive Cards */}
        <div className="row g-4">
          {wallets.map((wallet) => (
            <div key={wallet.top} className="col-12 col-sm-12 col-md-6 col-lg-4">
              <div className="card card-bg text-dark border-0 rounded-4 shadow-sm p-4 h-100 custom-card">
                <h6 className="mb-4 text-dark">{wallet.top}</h6>

                {wallet.items.map((itm) => (
                  <div
                    key={itm.id}
                    className="d-flex align-items-center justify-content-between mb-3 flex-wrap"
                  >
                    <div className="d-flex align-items-center gap-2 mb-2 mb-sm-0">
                      <img
                        src={itm.img}
                        alt={itm.name}
                        width="30"
                        height="30"
                        className="rounded-circle"
                      />
                      <span className="fw-semibold small">{itm.name}</span>
                    </div>
                    <div className="text-end">
                      <div className="fw-semibold text-success small">
                        {itm.price}
                      </div>
                      <div className={`small ${itm.color}`}>{itm.change}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container-fluid card-bg">
        <div className="container card-bg px-lg-4 px-md-4 mt-5 py-5 text-white" >
          {/* Tabs and Search Bar */}
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-4 ">
            <div className="d-flex mb-3 mb-md-0">
              {["All", "Crypto", "Fiat"].map((tab) => (
                <button
                  key={tab}
                  className={`btn btn-sm me-2 fw-semibold ${activeTab === tab ? "btn-nav" : "btn-outline-secondary"
                    }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab === "Crypto" && <i className="me-2 bi bi-currency-bitcoin"></i>}
                  {tab}
                </button>
              ))}
            </div>
            <div className="input-group w-100 w-md-50" style={{ maxWidth: "350px" }}>
              <span className="input-group-text bg-tarsnsparent border-secondary text-dark">
                <BsSearch />
              </span>
              <input
                type="text"
                className="form-control bg-tarnsparent text-dark border-secondary"
                placeholder="Search here..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          {/* Table */}
          <div className="table-responsive rounded rounded-3">
            <table className="table dashboard-container table-hover align-middle text-center rounded rounded-4">
              <thead className="py-3 ">
                <tr className="py-5"  >
                  <th className="text-secondary fw-midium">Pair</th>
                  <th className="text-secondary fw-midium">Price</th>
                  <th className="text-secondary fw-midium">1h Change</th>
                  <th className="text-secondary fw-midium">24h Change</th>
                  <th className="text-secondary fw-midium">Marketcap</th>
                  <th className="text-secondary fw-medium">Action</th>
                </tr>
              </thead>
              <tbody>

                {filteredCoins.map((coin, index) => (
                  <tr key={index}>
                    <td className="d-flex align-items-center justify-content-center gap-2">
                      <img
                        src={coin.icon}
                        alt={coin.pair}
                        width="32"
                        height="32"
                        style={{ borderRadius: "50%" }}
                      />
                      <span>{coin.pair}</span>
                    </td>
                    <td className="text-danger">{coin.price}</td>
                    <td className="text-danger">{coin.change1h}</td>
                    <td className="text-success">{coin.change24h}</td>
                    <td>{coin.marketcap}</td>
                    <td>
                      <button onClick={tradeClick} className="btn b btn-nav">Trade</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>


    </div>
  );
}

export default MarketOverview;
