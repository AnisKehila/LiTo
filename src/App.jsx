import React from "react"
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
        <Route path='/LiTo' element={<Home />} />
        <Route path='/LiTo/shop' element={<Shop />} />
        <Route path='/LiTo/shop/:brand' element={<Brand />} />
        <Route path='/LiTo/shop/:brand/:car' element={<Car />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </CartProvider>
  )
}

export default App
