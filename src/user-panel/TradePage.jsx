import React, { useState, useEffect } from "react";
import "./TradePage.css";

const TradePage = () => {
  const [search, setSearch] = useState("");
  const [activeMarketTab, setActiveMarketTab] = useState("BTC");
  const [activeOrderTab, setActiveOrderTab] = useState("All");
  const [selectedPair, setSelectedPair] = useState("BTC/USDT");
  const [tradeType, setTradeType] = useState("buy");
  const [showTradePopup, setShowTradePopup] = useState(false);
  const [livePrice, setLivePrice] = useState(null);
  const [amount, setAmount] = useState("");

  const tabs = ["All", "Open", "Completed", "Canceled"];

  const markets = [
    { pair: "BNB/USDT", price: 1081.451, change: -0.68 },
    { pair: "XRP/USDT", price: 3.0575, change: -0.96 },
    { pair: "ETH/USDT", price: 4487.7052, change: 0.08 },
    { pair: "ETH/BTC", price: 0.0372, change: 0.16 },
    { pair: "USDT/USD", price: 1.0005, change: 0.01 },
    { pair: "WBTC/USD", price: 120573.8107, change: 0.16 },
    { pair: "DOT/USD", price: 4.316, change: 0.09 },
    { pair: "MATIC/USD", price: 0.0, change: -0.95 },
    { pair: "TRX/EUR", price: 0.2926, change: -0.19 },
    { pair: "SOL/EUR", price: 198.5727, change: 0.09 },
    { pair: "DOGE/EUR", price: 0.2225, change: 0.52 },
    { pair: "ADA/EUR", price: 0.7435, change: -0.47 },
    { pair: "XRP/EUR", price: 2.6115, change: -0.96 },
    { pair: "BNB/EUR", price: 923.7162, change: -0.68 },
    { pair: "USDT/EUR", price: 2.616, change: -0.42 },
    { pair: "ETH/EUR", price: 4174.0199, change: -0.002 },
    { pair: "LTC/EUR", price: 1348.4435, change: 1.04 },
    { pair: "BTC/ETH", price: 1.0007, change: 0.01 },
  ];

  const filteredMarkets = markets.filter((m) =>
    m.pair.toLowerCase().includes(search.toLowerCase())
  );

  const sellOrders = [
    { price: 97486.7022, amount: 0.0102, total: 994.3644 },
    { price: 96347.4619, amount: 1.4218, total: 136986.8213 },
    { price: 71792.3062, amount: 0.229, total: 16440.4381 },
    { price: 69071.0732, amount: 1.1456, total: 79127.8215 },
    { price: 67864.5836, amount: 0.02, total: 1357.2917 },
    { price: 63046.4904, amount: 1.0, total: 63046.4904 },
    { price: 59396.9256, amount: 1.1316, total: 67213.561 },
    { price: 59253.7019, amount: 0.05, total: 2962.6851 },
    { price: 59253.0, amount: 0.005, total: 296.265 },
    { price: 51910.9592, amount: 0.1839, total: 9546.4254 },
  ];

  const buyOrders = [
    { price: 120561.6045, amount: 0.0041, total: 494.3026 },
    { price: 113517.2255, amount: 0.0009, total: 102.1655 },
    { price: 110932.8512, amount: 0.0021, total: 232.959 },
    { price: 109310.0, amount: 0.0015, total: 163.965 },
    { price: 104785.7714, amount: 0.0023, total: 231.9876 },
    { price: 104325.3716, amount: 0.0003, total: 31.2976 },
    { price: 104323.5692, amount: 0.0002, total: 20.8647 },
    { price: 101254.6687, amount: 0.0048, total: 486.021 },
    { price: 100000.0, amount: 1.0, total: 100000.0 },
  ];

  // ✅ Fetch Live Price from Binance API
  useEffect(() => {
    const symbol = selectedPair.replace("/", "");
    const fetchPrice = async () => {
      try {
        const response = await fetch(
          `https://api.binance.com/api/v3/ticker/price?symbol=${symbol}`
        );
        const data = await response.json();
        if (data.price) setLivePrice(parseFloat(data.price));
      } catch (err) {
        console.error("Error fetching live price:", err);
      }
    };

    fetchPrice();
    const interval = setInterval(fetchPrice, 5000); // refresh every 5s
    return () => clearInterval(interval);
  }, [selectedPair]);

  const total = livePrice && amount ? (livePrice * parseFloat(amount)).toFixed(2) : "0.00";

  return (
    <div className="tradepage-wrapper">
      {/* 🧭 LEFT PANEL - ORDER BOOK */}
      <div className="orderbook-container large-orderbook">
        <div className="orderbook-header">
          <h3>Order Book</h3>
          <div className="orderbook-tabs">
            <span className="active">All</span>
            <span>Sell</span>
            <span>Buy</span>
          </div>
        </div>

        <div className="orderbook-table">
          <div className="orderbook-headings">
            <span>Price (USDT)</span>
            <span>Amount (BTC)</span>
            <span>Total</span>
          </div>

          <div className="orderbook-sell">
            {sellOrders.map((order, index) => (
              <div className="order-row sell-row" key={index}>
                <span className="sell-price">{order.price.toLocaleString()}</span>
                <span>{order.amount}</span>
                <span>{order.total.toLocaleString()}</span>
              </div>
            ))}
          </div>

          <div className="orderbook-midprice">
            <span>{buyOrders[0].price.toLocaleString()} ↑</span>
          </div>

          <div className="orderbook-buy">
            {buyOrders.map((order, index) => (
              <div className="order-row buy-row" key={index}>
                <span className="buy-price">{order.price.toLocaleString()}</span>
                <span>{order.amount}</span>
                <span>{order.total.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 📈 CENTER PANEL - CHART + BUTTONS + ORDERS */}
      <div className="tradechart-container">
        <div className="tradechart-header">
          <h2 className="text-start">{selectedPair}</h2>
          <div className="tradechart-stats">
            <div>
              <span className="label">Price</span>
              <span className="value green">
                {livePrice ? livePrice.toFixed(2) : "Loading..."}
              </span>
            </div>
            <div>
              <span className="label">Last Price</span>
              <span className="value">{buyOrders[0].price.toLocaleString()}</span>
            </div>
            <div>
              <span className="label">1H Change</span>
              <span className="value red">0.16%</span>
            </div>
            <div>
              <span className="label">24H Change</span>
              <span className="value red">2.58%</span>
            </div>
            <div>
              <span className="label">Marketcap</span>
              <span className="value">2,402,576,129,078.2002</span>
            </div>
          </div>
        </div>

        {/* TradingView Chart */}
        <div className="chart-box position-relative">
          <iframe
            title="TradingView Chart"
            src={`https://s.tradingview.com/widgetembed/?symbol=BINANCE:${selectedPair.replace(
              "/",
              ""
            )}&interval=1D&theme=dark&style=1&locale=en`}
            frameBorder="0"
            allowFullScreen
            className="chart-frame w-100"
            style={{ height: "500px", borderRadius: "10px" }}
          ></iframe>
          

          {/* Floating Buy/Sell Buttons */}
          <div
            className="position-absolute d-flex justify-content-center align-items-center flex-wrap gap-3"
            style={{
              top: "5%",
              left: "75%",
              transform: "translate(-50%, -50%)",
              zIndex: 2,
              width: "100%",
              padding: "0 10px",
            }}
          >
            <button
              className="btn btn-success d-none d-lg-block d-md-block btn-sm px-4 py-2 fw-semibold shadow-sm"
              onClick={() => {
                setTradeType("buy");
                setShowTradePopup(true);
              }}
            >
              BUY {selectedPair.split("/")[0]}
            </button>
            <button
              className="btn btn-danger d-none d-lg-block d-md-block btn-sm px-4 py-2 fw-semibold shadow-sm"
              onClick={() => {
                setTradeType("sell");
                setShowTradePopup(true);
              }}
            >
              SELL {selectedPair.split("/")[0]}
            </button>
          </div>
        </div>
        <div className="d-flex justify-content-between my-2">
             <button
              className="btn btn-success d-flex d-lg-none d-md-none btn-sm px-4 py-2 fw-semibold shadow-sm"
              onClick={() => {
                setTradeType("buy");
                setShowTradePopup(true);
              }}
            >
              BUY {selectedPair.split("/")[0]}
            </button>
            <button
              className="btn btn-danger d-flex d-lg-none d-md-none btn-sm px-4 py-2 fw-semibold shadow-sm"
              onClick={() => {
                setTradeType("sell");
                setShowTradePopup(true);
              }}
            >
              SELL {selectedPair.split("/")[0]}
            </button>
          </div>

        {/* 💹 BUY/SELL POPUP BOX */}
        {showTradePopup && (
          <div className="trade-popup-overlay" onClick={() => setShowTradePopup(false)}>
            <div className="tradebox-container popup" onClick={(e) => e.stopPropagation()}>
              <div className="tradebox-tabs">
                <span
                  className={tradeType === "buy" ? "active" : ""}
                  onClick={() => setTradeType("buy")}
                >
                  Buy
                </span>
                <span
                  className={tradeType === "sell" ? "active" : ""}
                  onClick={() => setTradeType("sell")}
                >
                  Sell
                </span>
                <button className="close-btn" onClick={() => setShowTradePopup(false)}>
                  ❌
                </button>
              </div>

              <div className="tradebox-panels">
                <div className="tradebox">
                  <div className="available">
                    <span>Available</span>
                    <span>0.0000 {tradeType === "buy" ? "USDT" : selectedPair.split("/")[0]}</span>
                  </div>

                  <div className="input-group">
                    <label>Price</label>
                    <input
                      type="text"
                      value={livePrice ? livePrice.toFixed(4) : "Loading..."}
                      readOnly
                    />
                    <span className="unit">USDT</span>
                  </div>

                  <div className="input-group">
                    <label>Amount</label>
                    <input
                      type="text"
                      placeholder={`Enter ${selectedPair.split("/")[0]} amount`}
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                    />
                    <span className="unit">{selectedPair.split("/")[0]}</span>
                  </div>

                  <div className="slider">
                    <div className="slider-marks">
                      <span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                    </div>
                  </div>

                  <div className="total">
                    <label>Total</label>
                    <input type="text" value={total} readOnly />
                    <span className="unit">USDT</span>
                  </div>

                  <div className="fee">{tradeType === "buy" ? "Fee 0.6%" : "Fee 1.1%"}</div>
                  <button className={tradeType === "buy" ? "buy-btn" : "sell-btn"}>
                    {tradeType.toUpperCase()} {selectedPair.split("/")[0]}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* My Orders */}
        <div className="order-div">
          <div className="myorder-container">
            <div className="myorder-header">
              <h2>My Order</h2>
              <div className="myorder-tabs">
                {tabs.map((tab) => (
                  <span
                    key={tab}
                    className={activeOrderTab === tab ? "active" : ""}
                    onClick={() => setActiveOrderTab(tab)}
                  >
                    {tab}
                  </span>
                ))}
              </div>
            </div>

            <div className="myorder-table">
              <div className="table-header">
                <span>Date</span>
                <span>Pair</span>
                <span>Side</span>
                <span>Amount | Rate</span>
                <span>Total</span>
                <span>Filled</span>
                <span>Status</span>
              </div>

              <div className="table-body empty">
                <img src="/emptybox.png" alt="No order found" />
                <p>No order found</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 📊 RIGHT PANEL - MARKETS */}
      <div className="marketfull">
        <div className="markets-panel">
          <div className="markets-header">
            <h3>Markets</h3>
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="markets-tabs">
            {["BTC", "ETH", "USDT", "USDC", "XRP", "DOGE"].map((tab) => (
              <span
                key={tab}
                className={activeMarketTab === tab ? "active" : ""}
                onClick={() => setActiveMarketTab(tab)}
              >
                {tab}
              </span>
            ))}
            <span className="more">{">"}</span>
          </div>

          <div className="markets-table">
            <div className="markets-heading">
              <span>Pair</span>
              <span>Price</span>
              <span>Change</span>
            </div>

            <div className="markets-list">
              {filteredMarkets.map((item, index) => (
                <div
                  className="market-row"
                  key={index}
                  onClick={() => setSelectedPair(item.pair)}
                  style={{ cursor: "pointer" }}
                >
                  <span className="pair">
                    <i className="fa fa-star-o" aria-hidden="true"></i>{" "}
                    {item.pair}
                  </span>
                  <span className={item.change < 0 ? "price red" : "price green"}>
                    {item.price.toLocaleString()}
                  </span>
                  <span className={item.change < 0 ? "change red" : "change green"}>
                    {Math.abs(item.change).toFixed(2)}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradePage;
