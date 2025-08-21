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
         <Route index element={<HomePage/>} />
        <Route path="checkout" element={<CheckoutPages />} />
        <Route path="orders" element={<OrderPage />} />
        <Route path="tracking" element={<TrackingPage/>} />
      </Routes>
   

    </>
  )
}

export default App
