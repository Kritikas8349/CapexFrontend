import React, { useState } from "react";
import "./TradePage.css";
// import your empty icon image here
// import emptybox from "./emptybox.png";

const TradePage = () => {
  const [search, setSearch] = useState("");
  const [activeMarketTab, setActiveMarketTab] = useState("BTC");
  const [activeOrderTab, setActiveOrderTab] = useState("All");

  const tabs = ["All", "Open", "Completed", "Canceled"];

  const markets = [
    { pair: "BNB/USDT", price: 1081.451, change: -0.68 },
    { pair: "XRP/USDT", price: 3.0575, change: -0.96 },
    { pair: "ETH/USDT", price: 4487.7052, change: 0.08 },
    { pair: "ETH/BTC", price: 0.0372, change: 0.16 },
    { pair: "USDT/USD", price: 1.0005, change: 0.01 },
    { pair: "WBTC/USD", price: 120573.8107, change: 0.16 },
    { pair: "DOT/USD", price: 4.316, change: 0.09 },
    { pair: "MATIC/USD", price: 0.0000, change: -0.95 },
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
    { price: 50964.2857, amount: 0.0092, total: 468.8714 },
    { price: 43691.4907, amount: 0.0046, total: 200.9809 },
    { price: 38747.7045, amount: 0.0158, total: 612.2137 },
    // Added New Orders
    { price: 97506.5536, amount: 0.0038, total: 370.5249 },
    { price: 97486.7022, amount: 0.0003, total: 29.2460 },
    { price: 84980.9674, amount: 0.0100, total: 849.8097 },
    { price: 71792.3062, amount: 0.0334, total: 2397.8630 },
    { price: 69492.6767, amount: 0.0007, total: 48.6449 },
    { price: 69347.8313, amount: 0.0002, total: 13.8696 },
    { price: 69347.8313, amount: 0.0035, total: 242.7174 },
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

  return (
    <div className="tradepage-wrapper">
      {/* LEFT SIDE - ORDER BOOK */}
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
                <span className="sell-price">
                  {order.price.toLocaleString()}
                </span>
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

      {/* CENTER - CHART */}
      <div className="tradechart-container">
        <div className="tradechart-header">
          <h2>BTC/USDT</h2>
          <div className="tradechart-stats">
            <div>
              <span className="label">Price</span>
              <span className="value green">120,561.6045</span>
            </div>
            <div>
              <span className="label">Last Price</span>
              <span className="value">120,481.2768</span>
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

        <div className="chart-box position-relative">
  {/* Chart */}
  <iframe
    title="TradingView Chart"
    src="https://s.tradingview.com/widgetembed/?symbol=BINANCE:BTCUSDT&interval=1D&theme=dark&style=1&locale=en"
    frameBorder="0"
    allowFullScreen
    className="chart-frame w-100"
    style={{
      height: "500px",
      borderRadius: "10px",
    }}
  ></iframe>

  {/* Buttons Overlay */}
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
    <button className="btn btn-success d-none d-lg-block btn-sm px-4 py-2 fw-semibold shadow-sm">
      BUY BTC
    </button>
    <button className="btn btn-danger d-none d-lg-block btn-sm px-4 py-2 fw-semibold shadow-sm">
      SELL BTC
    </button>
  </div>
</div>


        {/* BOTTOM - TRADE BOX SECTION */}
        <div className="tradebox-container">
          <div className="tradebox-tabs">
            <span className="active">Limit</span>
            <span>Market</span>
            <span>Stop Limit</span>
          </div>

          <div className="tradebox-panels">
            {/* BUY BOX */}
            <div className="tradebox buy-box">
              <div className="available">
                <span>Available</span>
                <span>0.0000 USDT</span>
              </div>

              <div className="input-group">
                <label>Price</label>
                <input type="text" value="69347.8313" readOnly />
                <span className="unit">USDT</span>
              </div>

              <div className="input-group">
                <label>Amount</label>
                <input type="text" placeholder="Minimum 0.0002 BTC" />
                <span className="unit">BTC</span>
              </div>

              <div className="slider">
                <div className="slider-marks">
                  <span>0%</span>
                  <span>25%</span>
                  <span>50%</span>
                  <span>75%</span>
                  <span>100%</span>
                </div>
              </div>

              <div className="total">
                <label>Total</label>
                <input type="text" value="0.00" readOnly />
                <span className="unit">USDT</span>
              </div>

              <div className="fee">Fee 0.6%</div>
              <button className="buy-btn">BUY BTC</button>
            </div>

            {/* SELL BOX */}
            <div className="tradebox sell-box">
              <div className="available">
                <span>Available</span>
                <span>0.0000 BTC</span>
              </div>

              <div className="input-group">
                <label>Price</label>
                <input type="text" value="69347.8313" readOnly />
                <span className="unit">USDT</span>
              </div>

              <div className="input-group">
                <label>Amount</label>
                <input type="text" placeholder="Minimum 0.0040 BTC" />
                <span className="unit">BTC</span>
              </div>

              <div className="slider">
                <div className="slider-marks">
                  <span>0%</span>
                  <span>25%</span>
                  <span>50%</span>
                  <span>75%</span>
                  <span>100%</span>
                </div>
              </div>

              <div className="total">
                <label>Total</label>
                <input type="text" value="0.00" readOnly />
                <span className="unit">USDT</span>
              </div>

              <div className="fee">Fee 1.1%</div>
              <button className="sell-btn">SELL BTC</button>
            </div>
          </div>
        </div>

        {/* MY ORDERS SECTION */}
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

      {/* RIGHT SIDE - MARKETS PANEL */}
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
                <div className="market-row" key={index}>
                  <span className="pair">
                    <i className="fa fa-star-o" aria-hidden="true"></i>{" "}
                    {item.pair}
                  </span>
                  <span
                    className={item.change < 0 ? "price red" : "price green"}
                  >
                    {item.price.toLocaleString()}
                  </span>
                  <span
                    className={item.change < 0 ? "change red" : "change green"}
                  >
                    {Math.abs(item.change).toFixed(2)}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* TRADE HISTORY SECTION */}
        <div className="trade-history-section">
          <h3>Trade History</h3>

          <div className="trade-history-table">
            <div className="trade-history-header">
              <span>Price (USDT)</span>
              <span>Amount (BTC)</span>
              <span>Date/Time</span>
            </div>

            <div className="trade-history-list">
              {[
                { price: 104325.3716, amount: 0.001, date: "25.06.24 05:50" },
                { price: 104325.3716, amount: 0.001, date: "25.06.24 05:50" },
                { price: 97486.7022, amount: 0.0005, date: "25.02.26 06:25" },
                { price: 96347.4619, amount: 0.0005, date: "25.01.30 03:05" },
                { price: 96347.4619, amount: 0.0013, date: "25.01.30 01:25" },
                { price: 96347.4619, amount: 0.0010, date: "25.01.30 01:25" },
                { price: 96347.4619, amount: 0.0003, date: "25.01.30 01:25" },
                { price: 96347.4619, amount: 0.0020, date: "25.01.30 01:25" },
                { price: 69492.6767, amount: 0.0129, date: "24.11.30 12:20" },
                { price: 59396.9256, amount: 0.0002, date: "24.08.10 11:30" },
                { price: 96347.4619, amount: 0.0005, date: "25.01.30 03:05" },
                { price: 96347.4619, amount: 0.0013, date: "25.01.30 01:25" },
                { price: 96347.4619, amount: 0.0010, date: "25.01.30 01:25" },
                { price: 96347.4619, amount: 0.0003, date: "25.01.30 01:25" },
                { price: 96347.4619, amount: 0.0020, date: "25.01.30 01:25" },
                { price: 69492.6767, amount: 0.0129, date: "24.11.30 12:20" },
                { price: 59396.9256, amount: 0.0002, date: "24.08.10 11:30" },
                
              ].map((t, i) => (
                <div className="trade-history-row" key={i}>
                  <span className={t.price >= 96347 ? "green" : "red"}>
                    {t.price.toLocaleString()}
                  </span>
                  <span>{t.amount.toFixed(4)}</span>
                  <span>{t.date}</span>
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
