
import { Routes, Route, useLocation } from "react-router-dom"; 
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "bootstrap-icons/font/bootstrap-icons.css";

import Sidebar from "./Component/Sidebar";
import TopRightNavbar from "./Component/TopRightNavbar";
import Dashboard from "./Component/Dashboard";
import ProfileSetting from "./Component/ProfileSetting";
import ManageOrder from "./Component/ManageOrder";
import TradePage from "./Component/TradePage";
import ManageWallet from "./Component/ManageWallet";
import WalletDetails from "./Component/WalletDetails";
import TwoFactor from "./Component/TwoFactor";
import TradeHistory from "./Component/TradeHistory";
import DepositeHistory from "./Component/DepositeHistory";
import WithdrawHistory from "./Component/WithdrawHistory";
import TransactionHistory from "./Component/TransactionHistory";
import GetSupport from "./Component/GetSupport";
import OpenTicket from "./Component/OpenTicket";
import ReplyTicket from "./Component/ReplyTicket";
// import TradeNavbar from "./component/TradeNavbar";

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
          <Route path="/change-password" element={<ChangePassword></ChangePassword>} />
          <Route path="/change-password" element={<ChangePassword></ChangePassword>} />
          {/* <Route path="/logout" element={<Logout></Logout>} /> */}

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
          {/* <Route path="/trade-navbar" element={<TradeNavbar/>} /> */}
          <Route path="/security" element={<TwoFactor/>} />
        </Routes>
      </div>
    </div>
  );
}


export default App;