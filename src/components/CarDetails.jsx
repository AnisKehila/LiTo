import { useState } from "react"
import { formatPrice } from "../utils/priceFormater"
export default function CarDetails({car, brand}) {
    const [currentImg, setCurrentImg]= useState('front');
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
                
            </div>
        </div>
    )
}
