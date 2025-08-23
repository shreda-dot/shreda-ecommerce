import React from "react";
import dayjs from "dayjs";
import { FormatMoney } from "../../utility/money";



const DeliveryOptions = ({cartItem, deliveryoptions}) => {
  return (
    <div>
      <div className="delivery-options">
        <div className="delivery-options-title">Choose a delivery option:</div>
        {deliveryoptions.map((deliveryoption) => {
          let priceString = "FREE Shipping";
          if (deliveryoption.priceCents > 0) {
            priceString = `${FormatMoney(
              deliveryoption.priceCents
            )} - Shipping`;
          }
          return (
            <div key={deliveryoption.id} className="delivery-option">
              <input
                type="radio"
                checked={deliveryoption.id === cartItem.deliveryoptionId}
                className="delivery-option-input"
                name={`delivery-option-1-${cartItem.productId}`}
              />
              <div>
                <div className="delivery-option-date">
                  {dayjs(deliveryoption.estimatedDeliveryTimeMs).format(
                    "dddd,MMMM, D"
                  )}
                </div>
                <div className="delivery-option-price">{priceString}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DeliveryOptions;
