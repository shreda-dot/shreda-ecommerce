import React from 'react'
import {Routes, Route} from 'react-router'
import HomePage from './Pages/HomePage.jsx'
import CheckoutPages from './Pages/CheckoutPages.jsx'
import OrderPage from './Pages/OrderPage.jsx'
import TrackingPage from './Pages/TrackingPage.jsx'
import Header from './Component/Header.jsx'

const App = () => {
  const [cartCount, setCartCount] = React.useState(0);
  const handleAddToCart = () => {
    setCartCount(prevCount => prevCount + 1);
  };

  return (
    <>
    <Header cartCount={cartCount} />
    <Routes>
         <Route index element={<HomePage onAddToCart={handleAddToCart} />} />
        <Route path="checkout" element={<CheckoutPages cartCount={cartCount} />} />
        <Route path="orders" element={<OrderPage cartCount={cartCount} />} />
        <Route path="tracking" element={<TrackingPage cartCount={cartCount} />} />
      </Routes>
   

    </>
  )
}

export default App
