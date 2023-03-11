import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Route, Routes } from "react-router-dom"
import CartProvider from './context/CartProvider'
import Navbar from "./components/Navbar"
import { Home } from './pages/Home' 
import { Shop } from './pages/Shop' 
import { Car } from './pages/Car' 
import { Brand } from './pages/Brand' 
import { NotFound } from './pages/NotFound' 
function App() {
  return (
    <CartProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/shop/:brand' element={<Brand />} />
        <Route path='/shop/:brand/:car' element={<Car />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </CartProvider>
  )
}

export default App
