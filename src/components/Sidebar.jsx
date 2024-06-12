import React, { useState } from 'react';
import './Sidebar.css';
import Icon from "../Images/Icon.png";
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList,
    FaTelegram,
    FaBookOpen ,
    FaMoneyBill,
    FaTshirt,
    FaChartBar
} from "react-icons/fa";

import { NavLink } from 'react-router-dom';

const Sidebar = ({ children }) => {
    const [isHovered, setIsHovered] = useState(false);

    const menuItem = [
        {
            path: "/",
            name: "Dashboard",
            icon: <FaTh />
        },
        {
            path: "/about",
            name: "Transactions",
            icon: <FaMoneyBill   />
        },
        {
            path: "/analytics",
            name: "Products",
            icon: <FaTshirt />
        },
        {
            path: "/comment",
            name: "Analysis",
            icon: <FaChartBar  />
        },
        // {
        //     path: "/product",
        //     name: "Product",
        //     icon: <FaShoppingBag />
        // },
        // {
        //     path: "/productList",
        //     name: "Product List",
        //     icon: <FaThList />
        // }
    ];

    return (
        <div className="container">
            <div 
                className="sidebar"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{ width: isHovered ? "200px" : "50px" }}
            >
                <div className="top_section">
                    <h1 style={{ display: isHovered ? "block" : "none" }} className="logo"><img src={Icon} alt="icon" className="logo" /></h1>
                    <div style={{ marginLeft: isHovered ? "90px" : "0px" }} className="bars">
                        <FaBars />
                    </div>
                </div>
                <div className="menu_items">
                    {menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link" activeClassName="active">
                            <div className="icon">{item.icon}</div>
                            <div style={{ display: isHovered ? "block" : "none" }} className="link_text">{item.name}</div>
                        </NavLink>
                    ))}
                </div>
            </div>
            <main>{children}</main>
        </div>
    );
};

export default Sidebar;
