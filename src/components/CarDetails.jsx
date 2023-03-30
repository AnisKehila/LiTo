import { useContext, useState } from "react"
import { formatPrice } from "../utils/priceFormater"
import DriveTest from "./DriveTest"
import { CartContext } from '../context/CartProvider'

export default function CarDetails({car, brand}) {
    const [currentImg, setCurrentImg]= useState('front');
    const [formToggle, setFormToggle]= useState(false);
    const { showCart, addItem } = useContext(CartContext);
    return (
        <div className="car-details">
            <div className="images">
                <div className="slider">
                    <img src={car.front} alt="front-car-img" className={currentImg === 'front' ? 'active' : ''}/>
                    <img src={car.inside} alt="inside-car-img" className={currentImg === 'inside' ? 'active' : ''}/>
                    <img src={car.back} alt="back-car-img" className={currentImg === 'back' ? 'active' : ''}/>
                </div>
                <div className="btns">
                    <button type="button" onClick={() => setCurrentImg('front')}>Front Angle</button>
                    <button type="button" onClick={() => setCurrentImg('inside')}>Inside Angle</button>
                    <button type="button" onClick={() => setCurrentImg('back')}>Back Angle</button>
                </div>
            </div>
            <div className="content">
                <h1><span>{brand.brand}: </span>{car.name}</h1>
                <ul className="features">
                    <h2>What's Special About This Car ?</h2>
                    {car.features.map(feature => <li key={feature}>{feature}.</li>)}
                    <li>Price starts from {formatPrice(car.price)}.</li>
                </ul>
                <div className="btns">
                    <button onClick={() => setFormToggle(true)}>
                        Reserve Your Test Drive Today    
                    </button>
                    <button onClick={() => { addItem({...car, quantity : 1, brand: brand}) ; showCart() }}>
                        Buy Now! - Get Your Dream Car
                    </button>
                    <button  onClick={() => { addItem({...car, quantity : 1, brand: brand}) }}>
                        Add to Cart - Come Back Any Time
                    </button>
                </div>
            </div>
            <div className={`form-container${formToggle ? ' active' : ''}`}>
                <DriveTest setFormToggle={setFormToggle} />
            </div>
        </div>
    )
}
