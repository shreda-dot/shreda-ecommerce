import React from 'react'
import {Routes, Route} from 'react-router'
import Testing from './testing.jsx'
import HomePage from './ecommerce-project-main/Pages/HomePage.jsx'
import CheckoutPages from './ecommerce-project-main/Pages/CheckoutPages.jsx'
import OrderPage from './ecommerce-project-main/Pages/OrderPage.jsx'
import TrackingPage from './ecommerce-project-main/Pages/TrackingPage.jsx'

const App = () => {
  return (
    <>
    <Routes>
        <Route index element={<HomePage />} />
      <Route path="/testing" element={<Testing />} />
      <Route path="Checkout" element={<CheckoutPages />} />
      <Route path="Order" element={<OrderPage />} />
      <Route path="Tracking" element={<TrackingPage />} />

      </Routes>
   

    </>
  )
}

export default App
