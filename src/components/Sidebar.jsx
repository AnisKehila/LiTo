import React from 'react'
import { brands } from '../utils/brands'
import { Link, Outlet } from 'react-router-dom'
export default function Sidebar() {
    return (
        <>
        <ul className= 'sidebar'>
            {brands().map(brand =>
                <li key={brand}>
                    <Link to={`/LiTo/shop/${brand}`}>{brand}</Link>
                </li>
            )}
        </ul>
        <Outlet />
        </>
    )
}
