import React from 'react'
import {Routes, Route} from 'react-router'

import HomePage from './Pages/HomePage.jsx'
import CheckoutPages from './Pages/CheckoutPages.jsx'
import OrderPage from './Pages/OrderPage.jsx'
import TrackingPage from './Pages/TrackingPage.jsx'

const App = () => {
  return (
    <>
    <Routes>
        <Route index element={<HomePage />} />
      <Route path="checkout" element={<CheckoutPages />} />
      <Route path="Orders" element={<OrderPage />} />
      <Route path="Tracking" element={<TrackingPage />} />

      </Routes>
   

    </>
  )
}

export default App
