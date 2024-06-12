// src/Topbar.jsx
import React from 'react';
import './Topbar.css';
import { FaSearch, FaTh, FaBell } from 'react-icons/fa';
import Icon from "../Images/profile.png";

const Topbar = () => {
  return (
    <div className="topbar-container">
      <div className="topbar-left">
        <input type="text" className="search-bar" placeholder="Search..." />
      </div>
      <div className="topbar-right">
        <FaTh className="icon" />
        <div className="notification">
          <FaBell className="icon" />
          <span className="badge">1</span>
        </div>
        <div className="profile">
        <img src={Icon} alt="icon" className="pp" />
          <span className="profile-arrow">▼</span>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
