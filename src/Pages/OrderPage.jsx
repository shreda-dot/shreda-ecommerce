import React from "react";
import axios from "axios";
import "./Orders.css";
import Header from "../Component/Header";
import { FormatMoney } from "../utility/money";
import { Link } from "react-router";
import dayjs from "dayjs";
import { Fragment } from "react";

const OrderPage = ({ cart }) => {
  const [Orders, setOrders] = React.useState([]);
  React.useEffect(() => {
    axios.get("/api/orders?expand=products").then((response) => {
      setOrders(response.data);
    });
  }, []);

  return (
    <>
      <Header cart={cart} />
      <div className="orders-page">
        <div className="page-title">Your Orders</div>
        <div className="orders-grid">
          {Orders.map((order) => {
            return (
              <div key={order.id} className="order-container">
                <div className="order-header">
                  <div className="order-header-left-section">
                    <div className="order-date">
                      <div className="order-header-label">Order Placed:</div>
                      <div>{dayjs(order.orderTimeMs).format("MMMM,  D")}</div>
                    </div>
                    <div className="order-total">
                      <div className="order-header-label">Total:</div>
                      <div>{FormatMoney(order.totalCostCents)}</div>
                    </div>
                  </div>
                  <div className="order-header-right-section">
                    <div className="order-header-label">Order ID:</div>
                    <div>{order.id}</div>
                  </div>
                </div>

                <div className="order-details-grid">
                  {order.products.map((orderproduct) => {
                    return (
                      <Fragment key={orderproduct.product.id}>
                        <div className="product-image-container">
                          <img src={orderproduct.product.image} />
                        </div>

                        <div className="product-details">
                          <div className="product-name">
                            {orderproduct.product.name}
                          </div>
                          <div className="product-delivery-date">
                         Arriving on: {dayjs(orderproduct.estimatedDeliveryTimeMs).format('MMMM, D')}
                          </div>
                          <div className="product-quantity">
                            {orderproduct.quantity}
                            </div>
                          <button className="buy-again-button button-primary">
                            <img
                              className="buy-again-icon"
                              src="images/icons/buy-again.png"
                            />
                            <span className="buy-again-message">Add to Cart</span>
                          </button>
                        </div>

                        <div className="product-actions">
                          <Link to="/tracking">
                            <button className="track-package-button button-secondary">
                              Track package
                            </button>
                          </Link>
                        </div>
                      </Fragment>
                    );
                  })}

                </div>
              </div>
            );
          })}

         
        </div>
      </div>
    </>
  );
};

export default OrderPage;
