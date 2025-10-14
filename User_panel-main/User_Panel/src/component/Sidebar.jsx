import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { 
  FaTachometerAlt, FaWallet, FaHistory, FaBars, FaTimes, FaLifeRing, FaLock, FaSignOutAlt 
} from "react-icons/fa";
import { MdOutlineManageAccounts } from "react-icons/md";
import { BiTransfer } from "react-icons/bi";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Hamburger Button */}
      <div className="hamburger" onClick={toggleSidebar}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-logo">
          <img src="/logo.png" alt="Logo" className="sidebar-logo-img" />
          <p>Digital Trading Platform</p>
        </div>

        <ul className="sidebar-menu">
          <li>
            <FaTachometerAlt className="icon" />
            <Link to="/dashboard" className="text-decoration-none">Dashboard</Link>
          </li>
          <li>
            <MdOutlineManageAccounts className="icon" />
            <Link to="/manage-order" className="text-decoration-none">Manage Order</Link>
          </li>
          <li>
            <FaHistory className="icon" />
            <Link to="/trade-history" className="text-decoration-none">Trade History</Link>
          </li>
          <li>
            <FaWallet className="icon" />
            <Link to="/manage-wallet" className="text-decoration-none">Manage Wallet</Link>
          </li>
          <li>
            <BiTransfer className="icon" />
            <Link to="/deposit-history" className="text-decoration-none">Deposit History</Link>
          </li>
          <li>
            <BiTransfer className="icon" />
            <Link to="/withdraw-history" className="text-decoration-none">Withdraw History</Link>
          </li>
          <li>
            <BiTransfer className="icon" />
            <Link to="/transaction-history" className="text-decoration-none">Transactons History</Link>
          </li>
          <li>
            <BiTransfer className="icon" />
            <Link to="/get-support" className="text-decoration-none">Get Support</Link>
          </li>
        </ul>
      </div>

      {/* Overlay for mobile */}
      {isOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </>
  );
};

export default Sidebar;
