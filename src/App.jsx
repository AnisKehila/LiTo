import React from "react"
import { Route, Routes } from "react-router-dom"
import CartProvider from './context/CartProvider'
import { Home } from './pages/Home' 
import { Shop } from './pages/Shop' 
import { Car } from './pages/Car' 
import { Brand } from './pages/Brand' 
import { NotFound } from './pages/NotFound' 
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
function App() {
  return (
    <CartProvider>
      <Navbar />
      <Routes>
        <Route path='/LiTo' element={<Home />} />
        <Route path='/LiTo/shop' element={<Sidebar />}>
          <Route index element={<Shop />} />
          <Route path=':brand' element={<Brand />} />
        </Route>
        <Route path='/LiTo/shop/:brand/:car' element={<Car />} />
        <Route path='/LiTo/*' element={<NotFound />} />
        <Route path='/LiTo/notfound' element={<NotFound />} />
      </Routes>
    </CartProvider>
  )
}

export default App
