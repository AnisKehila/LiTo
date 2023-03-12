import React from 'react'
import { brands } from '../utils/brands'
import { NavLink, Outlet } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import car from '../assets/car_animation.gif'
export default function Sidebar() {
    const { brand } = useParams('brand')
    return (
        <main>
            <ul className= 'sidebar'>
                <li><h2>Brands</h2><span className='brand'>/{brand || 'All brands'}</span></li>
                {brands().map(brand =>
                    <li key={brand}>
                        <NavLink to={`/LiTo/shop/${brand}`}>
                            <span className='link'>{brand}</span>
                            <img src={car} alt="car" />
                        </NavLink>
                    </li>
                )}
            </ul>
            <Outlet />
        </main>
    )
}
