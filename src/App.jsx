import React from "react";
import { Routes, Route } from "react-router";
import HomePage from "./Pages/Home/HomePage.jsx";
import CheckoutPages from "./Pages/checkout/CheckoutPages.jsx";
import OrderPage from "./Pages/Orders/OrderPage.jsx";
import TrackingPage from "./Pages/TrackingPage.jsx";
import axios from "axios";

const App = () => {
  const [cart, SetCart] = React.useState([]);
  React.useEffect(() => {
    axios
      .get("/api/cart-items?expand=product")
      .then((response) => {
        SetCart(response.data);
      })
      .catch((error) => {
        console.error("Error fetching cart items:", error);
      });
  }, []);

  return (
    <>
      <Routes>
        <Route index element={<HomePage cart={cart} />} />
        <Route path="checkout" element={<CheckoutPages cart={cart} />} />
        <Route path="orders" element={<OrderPage cart={cart} />} />
        <Route path="tracking" element={<TrackingPage />} />
      </Routes>
    </>
  );
};

export default App;
