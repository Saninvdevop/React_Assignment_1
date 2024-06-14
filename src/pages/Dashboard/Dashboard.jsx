import React from "react";
import "./Dashboard.css";
import Profile from "../Images/user1.jpeg";
import Profile1 from "../Images/user2.jpeg";
import Profile2 from "../Images/user3.jpeg";
import Profile3 from "../Images/user4.png";

import icon1 from "../Images/ordericon.png";
import icon2 from "../Images/customer.png";
import icon3 from "../Images/dollar.png";
import PieChart from "./PieChart";

const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="dashboard-header">
                <p>Dashboard</p>
                <h1 className="hd12">Dashboard</h1>
                <button className="download-pdf">Download PDF</button>
            </div>
            <div className="stats">
                <div className="stat-item" id="one">
                    <div className="stat-icon new-orders"><img src={icon1} alt="profile" className="profile" /></div>
                    <div className="stat-info">
                        <h2>1020</h2>
                        <p>New Orders</p>
                    </div>
                </div>
                <div className="stat-item" id="two">
                    <div className="stat-icon customers"><img src={icon2} alt="profile" className="profile" /></div>
                    <div className="stat-info">
                        <h2>2834</h2>
                        <p>Customers</p>
                    </div>
                </div>
                <div className="stat-item" id="three">
                    <div className="stat-icon total-sales"><img src={icon3} alt="profile" className="profile" /></div>
                    <div className="stat-info">
                        <h2>$20,543</h2>
                        <p>Total Sales</p>
                    </div>
                </div>
            </div>
            <div className="main-content">
                <div className="recent-orders">
                    <h2 id="hd">Recent Orders</h2>
                    <table className="tb1">
                        <thead>
                            <tr>
                                <th>User</th>
                                <th>Date Order</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><img src={Profile} alt="profile" className="profile" />Sanath Anantha</td>
                                <td>01-10-2021</td>
                                <td><span className="status completed">Completed</span></td>
                            </tr>
                            <tr>
                                <td><img src={Profile1} alt="profile" className="profile" />Ravi Krishna</td>
                                <td>01-10-2021</td>
                                <td><span className="status pending">Pending</span></td>
                            </tr>
                            <tr>
                                <td><img src={Profile2} alt="profile" className="profile" />Kevin Syriak</td>
                                <td>01-10-2021</td>
                                <td><span className="status completed">Completed</span></td>
                            </tr>
                            <tr>
                                <td><img src={Profile3} alt="profile" className="profile" />Nitesh Yadav</td>
                                <td>01-10-2021</td>
                                <td><span className="status completed">Completed</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="orders-status">
                    <h2>Orders</h2>
                    <div className="chart">
                        <PieChart />
                    </div>
                </div>
                <div className="refunds-left">
                    <h2>Refunds</h2>
                    <table className="refunds-table">
                        <thead>
                            <tr>
                                <th>Action</th>
                                <th>Customer ID</th>
                                {/* <th>Transaction ID</th>
                                <th>Amount</th>
                                <th>Transaction Date</th>
                                <th>Status</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><button className="refund-button">Refund</button></td>
                                <td>011</td>
                                {/* <td>ch_3kQSiCSS5lhIMzrXW4TdfyOQA</td>
                                <td>25000</td>
                                <td>11/05/2022</td>
                                <td className="status succeeded">succeeded</td> */}
                            </tr>
                            <tr>
                                <td><button className="refund-button">Refund</button></td>
                                <td>012</td>
                                {/* <td>ch_3kQOOr5lhIMzrXW4THOWkIee</td>
                                <td>20000</td>
                                <td>07/02/2022</td>
                                <td className="status succeeded">succeeded</td> */}
                            </tr>
                            <tr>
                                <td><button className="refund-button">Refund</button></td>
                                <td>013</td>
                                {/* <td>ch_3kQONx5lhIMzrXW4Oxys4jmT</td>
                                <td>2000</td>
                                <td>07/02/2022</td>
                                <td className="status succeeded">succeeded</td> */}
                            </tr>
                            <tr>
                                <td><button className="refund-button">Refund</button></td>
                                <td>014</td>
                                {/* <td>ch_3kQNh5lhIMzrXW4TLFx6pnH</td>
                                <td>12000</td>
                                <td>07/02/2022</td>
                                <td className="status succeeded">succeeded</td> */}
                            </tr>
                            <tr>
                                <td><button className="refund-button">Refund</button></td>
                                <td>015</td>
                                {/* <td>ch_3kQOm5lhIMzrXW4QgOAtO5</td>
                                <td>12000</td>
                                <td>07/02/2022</td>
                                <td className="status succeeded">succeeded</td> */}
                            </tr>
                           
                           
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
