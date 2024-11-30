import React from "react";
import "./OrdersTable.css";
import img4 from "../img/img-4.jpg";
import img5 from "../img/img-5.jpg";
import img6 from "../img/img-6.jpg";
import img7 from "../img/img-7.jpeg";
import img8 from "../img/img-8.jpg";
import img9 from "../img/img-9.jpg";

const OrdersTable = () => {
  return (
    <>
      <div className="orders-table">
        <h2>Recent Orders</h2>
        <table className="tableStyling">
          <thead>
            <tr>
              <th>Customer</th>
              <th>Order No.</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img src={img4} />
                Wade Warren
              </td>
              <td>15478256</td>
              <td>$124.00</td>
              <td>
                <span className="status delivered">Delivered</span>
              </td>
            </tr>
            <tr>
              <td>
                <img src={img5} />
                Jane Cooper
              </td>
              <td>48967586</td>
              <td>$305.02</td>
              <td>
                <span className="status delivered">Delivered</span>
              </td>
            </tr>
            <tr>
              <td>
                <img src={img6} />
                Guy Hawkins
              </td>
              <td>78985215</td>
              <td>$45.88</td>
              <td>
                <span className="status cancelled">Cancelled</span>
              </td>
            </tr>
            <tr>
              <td>
                <img src={img7} />
                Kristin Watson
              </td>
              <td>20965732</td>
              <td>$56.00</td>
              <td>
                <span className="status pending">Pending</span>
              </td>
            </tr>
            <tr>
              <td>
                <img src={img8} />
                Cody Fisher
              </td>
              <td>95715620</td>
              <td>$545.00</td>
              <td>
                <span className="status delivered">Delivered</span>
              </td>
            </tr>
            <tr>
              <td>
                <img src={img9} />
                Savannah Nguyen
              </td>
              <td>78514568</td>
              <td>$128.20</td>
              <td>
                <span className="status delivered">Delivered</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default OrdersTable;
