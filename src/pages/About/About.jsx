import React from "react";
import "./About.css";
import icon1 from "../Images/icon4.png";
import icon2 from "../Images/icon5.png";

const About = () => {
    return (
        <div className="transactions-container">
            <div className="transactions-header">
                <h2 id="tab2">Transactions</h2>
                <div className="filter-container">
                    <input type="date" className="date-picker" />
                    <select className="employee-filter">
                        <option value="all">Admin</option>
                        {/* Add more employee options here */}
                    </select>
                    <input type="text" className="transaction-search" placeholder="Transaction ID" />
                    <button className="export-button">Export</button>
                </div>
            </div>
            
            <div className="summary-container">
                <div className="summary-item">
                    <h3 id="cnt1">120</h3>
                    <p id="hd1">Transactions</p>
                </div>
                <div className="summary-item">
                    <h3 id="cnt2">$20,600</h3>
                    <p id="hd2">Total Profits</p>
                </div>
                <div className="stat-icon new-orders1"><img src={icon1} alt="profile" className="profile" /></div>
                <div className="stat-icon customers1"><img src={icon2} alt="profile" className="profile" /></div>
            </div>
            
            <div className="transactions-table">
                <div className="table-header">
                    <h4>Sunday, 03 July 2023</h4>
                    <span>$1911.000</span>
                </div>
                <table>
                    <tbody>
                        <tr>
                            <td><span className="status-label partial-cancel">In transit</span></td>
                            <td>13:52</td>
                            <td>4841917L</td>
                            <td>Jp Nagar</td>
                            <td>Ravichandran Pillai</td>
                            <td>$1017.000</td>
                        </tr>
                        <tr>
                            <td><span className="status-label completed">Out for Delivery</span></td>
                            <td>12:02</td>
                            <td>4821017L</td>
                            <td>ITPL Park</td>
                            <td>Ramesh Verma</td>
                            <td>$117.000</td>
                        </tr>
                        <tr>
                            <td><span className="status-label completed">Out for Delivery</span></td>
                            <td>11:52</td>
                            <td>9841017L</td>
                            <td>BTM-2</td>
                            <td>Suyog Ram</td>
                            <td>$777.000</td>
                        </tr>
                    </tbody>
                </table>
                <div className="table-header" id="ent2">
                    <h4>Saturday, 02 July 2023</h4>
                    <span>$48.000</span>
                </div>
                <table>
                    <tbody>
                        <tr>
                            <td><span className="status-label completed">Out for Delivery</span></td>
                            <td>16:44</td>
                            <td>7841013D</td>
                            <td>HSR</td>
                            <td>Mohit Yadav</td>
                            <td>$24.000</td>
                        </tr>
                        <tr>
                            <td><span className="status-label canceled">Refund</span></td>
                            <td>16:49</td>
                            <td>7845613D</td>
                            <td>Majestic</td>
                            <td>Sunil Yadav</td>
                            <td>$24.000</td>
                        </tr>
                        {/* <tr>
                            <td><span className="status-label completed">Out for Delivery</span></td>
                            <td>19:44</td>
                            <td>7841013D</td>
                            <td>HSR</td>
                            <td>Lal Preet</td>
                            <td>$24.000</td>
                        </tr> */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default About;
