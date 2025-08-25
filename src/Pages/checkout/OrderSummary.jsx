import React from "react";
import dayjs from "dayjs";
import DeliveryOptions from "./DeliveryOptions"
import CartItemsDetails from "./CartItemsDetails";

const OrderSummary = ({cart, deliveryoptions, LoadCart}) => {
  return (
    <>
      <div className="order-summary">
        {deliveryoptions.length > 0 &&
          cart.map((cartItem) => {
            const selectedDeliveryOption = deliveryoptions.find(
              (deliveryOption) => {
                return deliveryOption.id === cartItem.deliveryOptionId;
              }
            );
            return (
              <div key={cartItem.productId} className="cart-item-container">
                <div className="delivery-date">
                  Delivery Date :{" "}
                  {dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format(
                    "dddd, MMMM D"
                  )}
                </div>

                <div className="cart-item-details-grid">
                  <img className="product-image" src={cartItem.product.image} />
                  <CartItemsDetails cartItem={cartItem} />
                  <DeliveryOptions cartItem={cartItem} deliveryoptions={deliveryoptions} LoadCart={LoadCart}/>                
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default OrderSummary;
