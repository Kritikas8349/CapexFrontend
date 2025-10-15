import { Routes, Route, useLocation, Navigate } from "react-router-dom"; 
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

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
import LoginForm1 from ""; 

// ✅ Protected Route Component
const ProtectedRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    return <Navigate to="/" />; // Redirect to login if not logged in
  }
  return children;
};

function App() {
  const location = useLocation();  
  const hideSidebarAndNavbarRoutes = ["/trade", "/"]; // Hide sidebar/navbar on trade & login
  const shouldHideSidebarAndNavbar = hideSidebarAndNavbarRoutes.includes(location.pathname);

  return (
    <div className="app-container">
      {!shouldHideSidebarAndNavbar && <Sidebar />}
      <div className="dashboard-wrapper">
        {!shouldHideSidebarAndNavbar && <TopRightNavbar />}

        <Routes>
          {/* Public route */}
          <Route path="/" element={<LoginForm1 />} />

          {/* Protected routes */}
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/profile" 
            element={
              <ProtectedRoute>
                <ProfileSetting />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/manage-order" 
            element={
              <ProtectedRoute>
                <ManageOrder />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/trade" 
            element={
              <ProtectedRoute>
                <TradePage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/trade-history" 
            element={
              <ProtectedRoute>
                <TradeHistory />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/deposit-history" 
            element={
              <ProtectedRoute>
                <DepositeHistory />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/withdraw-history" 
            element={
              <ProtectedRoute>
                <WithdrawHistory />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/transaction-history" 
            element={
              <ProtectedRoute>
                <TransactionHistory />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/get-support" 
            element={
              <ProtectedRoute>
                <GetSupport />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/open-ticket" 
            element={
              <ProtectedRoute>
                <OpenTicket />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/reply-ticket" 
            element={
              <ProtectedRoute>
                <ReplyTicket />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/manage-wallet" 
            element={
              <ProtectedRoute>
                <ManageWallet />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/wallet/:symbol" 
            element={
              <ProtectedRoute>
                <WalletDetails />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/security" 
            element={
              <ProtectedRoute>
                <TwoFactor />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
