import { Link } from "react-router-dom"
import { formatPrice } from '../utils/priceFormater'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { useContext } from "react"
import { CartContext } from "../context/CartProvider"
export default function Card({car, brand}) {
    const { addItem, showCart } = useContext(CartContext);
    return (
    <div className="card">
        <Link className="img" to={`/LiTo/shop/${brand}/${car.name}`}>
            <img src={car.front} alt={car.name} className="front"/>
            <img src={car.back} alt={car.name} className="back"/>
        </Link>
        <span className="brand">{brand}</span>
        <div className="content">
            <span className="car-name">{car.name}</span>
            <span className="car-price">{formatPrice(car.price)}</span>
        </div>
        <div className="btns">
            <button className="add-to-card" onClick={() => addItem({...car, quantity : 1, brand: brand})}>
                <span>
                    <AiOutlineShoppingCart />&nbsp; 
                    Add To cart 
                </span>
            </button>
            <button className="buy" onClick={() => { addItem({...car, quantity : 1, brand: brand}) ; showCart() }}>
                Buy Now
            </button>
        </div>
    </div>
    )
}
