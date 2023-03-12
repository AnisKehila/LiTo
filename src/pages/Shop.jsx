import { Link } from "react-router-dom"
import Cars from '../data/cars'
import { formatPrice } from '../utils/priceFormater'
import {AiOutlineShoppingCart} from 'react-icons/ai'
export function Shop() {
    const brands = Cars

    return (
        <div className="cards-container">
            {brands.map(brand => brand.cars.map(car => {
                return (
                    <div className="card" key={car.name}>
                        <Link className="img" to={`/LiTo/shop/${brand.brand}/${car.name}`}>
                            <img src={car.front} alt={car.name} className="front"/>
                            <img src={car.back} alt={car.name} className="back"/>
                        </Link>
                        <div className="content">
                            <span className="car-name">{car.name}</span>
                            <span className="car-price">{formatPrice(car.price)}</span>
                        </div>
                        <div className="btns">
                            <button className="add-to-card">
                                <span>
                                    <AiOutlineShoppingCart />&nbsp; 
                                    Add To cart 
                                </span>
                            </button>
                            <button className="buy">
                                Buy Now
                            </button>
                        </div>
                    </div>
                )
            }))}
        </div>
    )
}
