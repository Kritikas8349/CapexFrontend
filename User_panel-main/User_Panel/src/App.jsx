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

function App() {
  const location = useLocation();  
  const hideSidebarAndNavbarRoutes = ["/trade"]; 
  const shouldHideSidebarAndNavbar = hideSidebarAndNavbarRoutes.includes(location.pathname);

  return (
    <div className="app-container">
      {/* Sidebar tab show karein jab current route trade na ho */}
      {!shouldHideSidebarAndNavbar && <Sidebar />}
      {shouldHideSidebarAndNavbar && <TradeNavbar />}
      <div className="dashboard-wrapper">
        {/* TopRightNavbar tab show karein jab current route trade na ho */}
        {!shouldHideSidebarAndNavbar && <TopRightNavbar />}

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<ProfileSetting />} />
          <Route path="/manage-order" element={<ManageOrder />} />
          <Route path="/trade" element={<TradePage />} />
          <Route path="/trade-history" element={<TradeHistory />} />
          <Route path="/deposit-history" element={<DepositeHistory />} />
          <Route path="/withdraw-history" element={<WithdrawHistory />} />
          <Route path="/transaction-history" element={<TransactionHistory />} />
          <Route path="/get-support" element={<GetSupport />} />
          <Route path="/open-ticket" element={<OpenTicket />} />
          <Route path="/reply-ticket" element={<ReplyTicket />} />
          <Route path="/manage-wallet" element={<ManageWallet />} />
          <Route path="/wallet/:symbol" element={<WalletDetails />} />
          <Route path="/security" element={<TwoFactor />} />
          <Route path="/trade-navbar" element={<TradeNavbar/>} />
          <Route path="/security" element={<TwoFactor/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;