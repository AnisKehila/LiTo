import { useState } from "react"

export default function CarDetails({car}) {
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
                <h1>{car.name}</h1>
            </div>
        </div>
    )
}
