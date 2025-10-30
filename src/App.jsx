import "./App.css";
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import NavbarBlue from "./component/NavbarBlue";
import Footers from "./component/Footers";
import ScrollToTop from "./component/ScrollToTop";

import ScrollToTopButton from "./component/ScrollToTopButton";



import CreateAccount from "./component/CreateAccount";
import PersonalHome from "./component/PersonalHome";
import LoginForm1 from "./component/LoginForm1";
import CreateAccount from "./component/CreateAccount";
import EducationHub from "./component/EducationHub";
import Webinars from "./component/Webinars";
import ForexTutorials from "./component/ForexToutorials";
import SharesTutorials from "./component/SharesTutorials";
import CommoditiesTutorials from "./component/CommoditiesTutorials";
import Research from "./component/Research";
import TradingView from "./component/TradingView";
import CTrader from "./component/CTrader";
import MetaTrader4 from "./component/MetaTrader4";
import MetaTrader5 from "./component/MetaTrader5";
import CopyTrader from "./component/CopyTrader";
import About2 from "./component/About2";
import NewsSection from "./component/NewsSection";
import Compliance from "./component/Compliance";
import SecurityFunds from "./component/SecurityFunds";
import GettingStarted from "./component/GettingStarted";
import AccountSupport from "./component/AccountSupport";
import PlatformSupport from "./component/PlatformSupport";
import EconomicCalendar from "./component/EconomicCalendar";
import ContactSupport from "./component/ContactSupport";

// ✅ Subpages
import Education_Forex_Beginner from "./component/SubPages/Education_Forex_Beginner";
import Education_Forex_Intermediate from "./component/SubPages/Education_Forex_Intermediate";
import Education_Forex_Advance from "./component/SubPages/Education_Forex_Advance";
import Education_Com_Beginner from "./component/SubPages/Education_Com_Beginner";
import Education_Com_Intermediate from "./component/SubPages/Education_Com_Intermediate";
import Education_Com_Advance from "./component/SubPages/Educaiton_Com_Advance";
import Market_com_Energies from "./component/SubPages/Market_com_Energies";
import Market_com_Metal from "./component/SubPages/Market_com_Metal";
import Market_Future_Energy from "./component/SubPages/Market_Future_Energy";
import Market_Future_Indices from "./component/SubPages/Market_Future_Indices";
import Market_Future_Other from "./component/SubPages/Market_Future_Other";
import SecureClientArea from "./component/SubPages/SecureClientArea";

// ✅ Partners & Research
import PartnerNavbar from "./component/PartnerNavbar";
import PartnerHome from "./component/Partners/PartnerHome";
import AffiliateOverview from "./component/Partners/AffiliateOverview";
import AffiliateSupport from "./component/Partners/AffiliateSupport";
import IBOverview from "./component/Partners/IBOverview";
import MarketingMaterials from "./component/Partners/MarketingMaterials";
import ResearchNavbar from "./component/ResearchNavbar";
import ResearchHome from "./component/Research/ResearchHome";
import DailyNews from "./component/Research/DailyNews";
import EquityResearch from "./component/Research/EquityResearch";
import Australia from "./component/Research/Australia";
import NewZealand from "./component/Research/NewZealand";
import USA from "./component/Research/USA";
import TechnicalAnalysis from "./component/Research/TechnicalAnalysis";import TopScrollbtn from "./component/TopScrollbtn";
 


//--------------------------------------------user-panel-----------------------------------//

// import "bootstrap-icons/font/bootstrap-icons.css";


// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import "bootstrap-icons/font/bootstrap-icons.css";

// import Sidebar from "./user-panel/Sidebar";
// import TopRightNavbar from "./user-panel/TopRightNavbar";
// import Dashboard from "./user-panel/Dashboard";
// import ProfileSetting from "./user-panel/ProfileSetting";
// import ManageOrder from "./user-panel/ManageOrder";
// import TradePage from "./user-panel/TradePage";
// import ManageWallet from "./user-panel/ManageWallet";
// import WalletDetails from "./user-panel/WalletDetails";
// import TwoFactor from "./user-panel/TwoFactor";
// import TradeHistory from "./user-panel/TradeHistory";
// import DepositeHistory from "./user-panel/DepositeHistory";
// import WithdrawHistory from "./user-panel/WithdrawHistory";
// import TransactionHistory from "./user-panel/TransactionHistory";
// import GetSupport from "./user-panel/GetSupport";
// import OpenTicket from "./user-panel/OpenTicket";
// import ReplyTicket from "./user-panel/ReplyTicket";
// import TradeNavbar from "./user-panel/TradeNavbar";
// import TradeLayout from "./user-panel/TradeLayout";
// import MarketOverview from "./user-panel/MarketOverview";
// import CryptoCurrency from "./user-panel/CryptoCurrency";
// import ContactSupport from "../../../src/user-panel/ContactSupport"; 
// import QuickStart from "../../../src/user-panel/QuickStart";
//mport ChangePassword from "./user-panel/ChangePassword";
// import Logout from "./user-panel/Logout";

// ✅ Dashboard (User Panel)
import Sidebar from "./User-Panel/Sidebar";
import TopRightNavbar from "./User-Panel/TopRightNavbar";
import Dashboard from "./User-Panel/Dashboard";
import ProfileSetting from "./User-Panel/ProfileSetting";
import ManageWallet from "./User-Panel/ManageWallet";
import ManageOrder from "./User-Panel/ManageOrder";
import WalletDetails from "./User-Panel/WalletDetails";
import TwoFactor from "./User-Panel/TwoFactor";
import TradeHistory from "./User-Panel/TradeHistory";
import DepositeHistory from "./User-Panel/DepositeHistory";
import WithdrawHistory from "./User-Panel/WithdrawHistory";
import TransactionHistory from "./User-Panel/TransactionHistory";
import GetSupport from "./User-Panel/GetSupport";
import OpenTicket from "./User-Panel/OpenTicket";
import ReplyTicket from "./User-Panel/ReplyTicket";
import TradeLayout from "./User-Panel/TradeLayout";

import MarketOverview from "./User-Panel/MarketOverview";
import CryptoCurrency from "./User-Panel/CryptoCurrency";
import ChangePassword from "./User-Panel/ChangePassword";
import TradePage from "./User-Panel/TradePage";

// ✅ Protected Route
import ProtectedRoute from "./User-Panel/ProtectedRoute";



function Layout({ children }) {
  const location = useLocation();

  const isPartnerPage = location.pathname.startsWith("/partners") ||
    location.pathname.startsWith("/affiliates") ||
    location.pathname.startsWith("/ib-program") ||
    location.pathname.startsWith("/partner");

  const isResearchPage = location.pathname.startsWith("/research");

  let navbar = <NavbarBlue />;
  if (isResearchPage) navbar = <ResearchNavbar />;
  else if (isPartnerPage) navbar = <PartnerNavbar />;

  return (
    <>
      {navbar}
      {children}
    </>
  );
}

function App() {
  const location = useLocation();
  const isDashboardPage = location.pathname.startsWith("/userdashboard") ||
    location.pathname.startsWith("/userdashboard") ||
  location.pathname.startsWith("/profile") ||
  location.pathname.startsWith("/manage-order") ||
  location.pathname.startsWith("/manage-wallet") ||
  location.pathname.startsWith("/wallet") ||
  location.pathname.startsWith("/deposit-history") ||
  location.pathname.startsWith("/withdraw-history") ||
  location.pathname.startsWith("/transaction-history") ||
  location.pathname.startsWith("/security") ||
  location.pathname.startsWith("/trade") ||
  location.pathname.startsWith("/t-history") ||
  location.pathname.startsWith("/get-support") ||
  location.pathname.startsWith("/open-ticket") ||
  location.pathname.startsWith("/reply-ticket");
  return (
    <div className="app-container1">
      <ScrollToTop />


    <div className='app-container1'>


      <div className="app-section">
        <ScrollToTopButton/>
        <ScrollToTop />
        <Layout />
        
        <>
          <Layout>
            <Routes>
              <Route path="/" element={<PersonalHome />} />
              <Route path="/loginform" element={<LoginForm1 />} />
              <Route path="/create-account" element={<CreateAccount />} />

              {/* Education */}
              <Route path="/education/education-hub" element={<EducationHub />} />
              <Route path="/education/webinars" element={<Webinars />} />
              <Route path="/education/forex" element={<ForexTutorials />} />
              <Route path="/education/forex/beginner" element={<Education_Forex_Beginner />} />
              <Route path="/education/forex/intermediate" element={<Education_Forex_Intermediate />} />
              <Route path="/education/forex/advanced" element={<Education_Forex_Advance />} />
              <Route path="/education/shares" element={<SharesTutorials />} />
              <Route path="/education/commodities" element={<CommoditiesTutorials />} />
              <Route path="/education/commodities/beginner" element={<Education_Com_Beginner />} />
              <Route path="/education/commodities/intermediate" element={<Education_Com_Intermediate />} />
              <Route path="/education/commodities/advanced" element={<Education_Com_Advance />} />

              {/* Research */}
              <Route path="/research" element={<ResearchHome />} />
              <Route path="/research/daily-news" element={<DailyNews />} />
              <Route path="/research/technical-analysis" element={<TechnicalAnalysis />} />

              {/* Partners */}
              <Route path="/partners" element={<PartnerHome />} />
              <Route path="/affiliates/overview" element={<AffiliateOverview />} />
              <Route path="/affiliates/support" element={<AffiliateSupport />} />
              <Route path="/ib-program/overview" element={<IBOverview />} />
              <Route path="/ib-program/marketing-materials" element={<MarketingMaterials />} />

              {/* Platforms */}
              <Route path="/platforms/tradingview" element={<TradingView />} />
              <Route path="/platforms/ctrader" element={<CTrader />} />
              <Route path="/platforms/mt4" element={<MetaTrader4 />} />
              <Route path="/platforms/mt5" element={<MetaTrader5 />} />
              <Route path="/platforms/copytrade" element={<CopyTrader />} />

              {/* Support */}
              <Route path="/support/account-support" element={<AccountSupport />} />
              <Route path="/support/platform-support" element={<PlatformSupport />} />
              <Route path="/support/economic-calendar" element={<EconomicCalendar />} />
              <Route path="/support/contact-support" element={<ContactSupport />} />

              {/* About */}
              <Route path="/about/about-us" element={<About2 />} />
              <Route path="/about/news" element={<NewsSection />} />
              <Route path="/about/compliance" element={<Compliance />} />
              <Route path="/about/security-funds" element={<SecurityFunds />} />
            </Routes>
          </Layout>
          <Footers />
        </>
      )}


      <div className="app-container">
    <Sidebar />

      {isDashboardPage && (
        <div className="dashboard-wrapper">
          
          <TopRightNavbar />

          <Routes>
            <Route
              path="/userdashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            
            <Route path="/profile" element={<ProfileSetting />} />
            <Route path="/manage-order" element={<ManageOrder />} />  
            <Route path="/change-password" element={<ChangePassword />} />
            <Route path="/manage-wallet" element={<ManageWallet />} />
            <Route path="/wallet/:symbol" element={<WalletDetails />} />
            <Route path="/security" element={<TwoFactor />} />
            <Route path="/t-history" element={<TradeHistory />} />
            <Route path="/deposit-history" element={<DepositeHistory />} />
            <Route path="/withdraw-history" element={<WithdrawHistory />} />
            <Route path="/transaction-history" element={<TransactionHistory />} />
            <Route path="/get-support" element={<GetSupport />} />
            <Route path="/open-ticket" element={<OpenTicket />} />
            <Route path="/reply-ticket" element={<ReplyTicket />} />

            {/* Trade Section */}
            <Route path="/trade" element={<TradeLayout />}>
              <Route index element={<TradePage />} />
              <Route path="market-overview" element={<MarketOverview />} />
              <Route path="crypto-currency" element={<CryptoCurrency />} />
            </Route>
          </Routes>
          
        </>
        <Footers />

      </div>
    </div>
  );
}

export default App;
