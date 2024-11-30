import React from "react";
import ChartComponent from "./ChartComponent";
import OrdersTable from "./OrdersTable";
import RightSection from "./RightSection";
import "./Dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretUp,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { RiShoppingBasket2Fill } from "react-icons/ri";
import { GiShoppingBag } from "react-icons/gi";
import icon from '../img/icon1.png';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <p className="HeadingDashboard">Dashboard</p>
      <div className="main-content">
        <div className="main-left">
          <div className="stats">
            <div className="stat">
              <RiShoppingBasket2Fill className="dash-icon dash-icon-one" />
              <div className="text">Total Orders</div>
              <div className="stat-sub">
                <div className="price">75</div>
                <div className="dropdown-icon-color-1">
                  <FontAwesomeIcon
                    icon={faCaretUp}
                    className="dropdown-icon"
                  />
                  3%
                </div>
              </div>
            </div>

            <div className="stat">
              <GiShoppingBag className="dash-icon dash-icon-two" />
              <div className="text">Total Delivered</div>
              <div className="stat-sub">
                <div className="price">70</div>
                <div className="dropdown-icon-color-2">
                  <FontAwesomeIcon
                    icon={faCaretDown}
                    className="dropdown-icon"
                  />
                  3%
                </div>
              </div>
            </div>

            <div className="stat">
              <GiShoppingBag className="dash-icon dash-icon-three" />
              <div className="text">Total Cancelled</div>
              <div className="stat-sub">
                <div className="price">05</div>
                <div className="dropdown-icon-color-1">
                  <FontAwesomeIcon
                    icon={faCaretUp}
                    className="dropdown-icon"
                  />
                  3%
                </div>
              </div>
            </div>

            <div className="stat">
              <img src={icon} className="png-icon" alt="Total Revenue"/>
              <div className="text">Total Revenue</div>
              <div className="stat-sub">
                <div className="price">$12k</div>
                <div className="dropdown-icon-color-2">
                  <FontAwesomeIcon
                    icon={faCaretDown}
                    className="dropdown-icon"
                  />
                  3%
                </div>
              </div>
            </div>
          </div>
          <div className="chart">
            <ChartComponent />
          </div>
          <OrdersTable />
        </div>
        <div className="main-right">
          <RightSection />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
