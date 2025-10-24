import { Routes, Route, useLocation } from "react-router-dom"; 
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "bootstrap-icons/font/bootstrap-icons.css";

import Sidebar from "./component/Sidebar";
import TopRightNavbar from "./component/TopRightNavbar";
import Dashboard from "./component/Dashboard";
import ProfileSetting from "./component/ProfileSetting";
import ManageOrder from "./component/ManageOrder";
import TradePage from "./component/TradePage";
import ManageWallet from "./component/ManageWallet";
import WalletDetails from "./component/WalletDetails";
import TwoFactor from "./component/TwoFactor";
import TradeHistory from "./component/TradeHistory";
import DepositeHistory from "./component/DepositeHistory";
import WithdrawHistory from "./component/WithdrawHistory";
import TransactionHistory from "./component/TransactionHistory";
import GetSupport from "./component/GetSupport";
import OpenTicket from "./component/OpenTicket";
import ReplyTicket from "./component/ReplyTicket";
import TradeNavbar from "./component/TradeNavbar";
import TradeLayout from "./component/TradeLayout";
import MarketOverview from "./component/MarketOverview";
import CryptoCurrency from "./component/CryptoCurrency";
import ContactSupport from "../../../src/component/ContactSupport";
import QuickStart from "../../../src/component/QuickStart";

function App() {
  const location = useLocation();
  const shouldHideSidebarAndNavbar = location.pathname.startsWith("/trade");

  return (
    <div className="app-container">
      {!shouldHideSidebarAndNavbar && <Sidebar />}
      <div className="dashboard-wrapper">
        {!shouldHideSidebarAndNavbar && <TopRightNavbar />}

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/userdashboard" element={<Dashboard />} />
          <Route path="/profile" element={<ProfileSetting />} />
          <Route path="/manage-order" element={<ManageOrder />} />

          {/* Trade Layout */}
          <Route path="/trade" element={<TradeLayout />}>
            <Route index element={<TradePage />} />
            <Route path="market-overview" element={<MarketOverview />} />
          <Route path="crypto-currency" element={<CryptoCurrency />} />
          <Route path="about/about-us" element={<QuickStart />} />
          <Route path="support/contact-support" element={<ContactSupport />} />
          </Route>

          <Route path="/t-history" element={<TradeHistory />} />
          <Route path="/deposit-history" element={<DepositeHistory />} />
          <Route path="/withdraw-history" element={<WithdrawHistory />} />
          <Route path="/transaction-history" element={<TransactionHistory />} />
          <Route path="/get-support" element={<GetSupport />} />
          <Route path="/open-ticket" element={<OpenTicket />} />
          <Route path="/reply-ticket" element={<ReplyTicket />} />
          <Route path="/manage-wallet" element={<ManageWallet />} />
          <Route path="/wallet/:symbol" element={<WalletDetails />} />
          <Route path="/security" element={<TwoFactor />} />
          
        </Routes>
      </div>
    </div>
  );
}


export default App;