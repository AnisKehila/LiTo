import logo from '../assets/Logo/logo-no-background.svg'
import { Link } from 'react-router-dom'
import { TfiSearch } from 'react-icons/tfi'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { IoMdArrowDropdown } from 'react-icons/io'
import { brands } from '../utils/brands'
import { useContext } from 'react'
import { CartContext } from '../context/CartProvider'
export default function Navbar({className}) {
    const { showCart } = useContext(CartContext)
    return (
        <nav className={className}>
            <Link to='/LiTo' ><img src={logo} alt="logo" /></Link>
            <div className='links'>
                <ul>
                    <li><Link to='/LiTo/shop'>Shop</Link></li>
                    <li className='brand'>
                        <Link>Brands <IoMdArrowDropdown /></Link>
                        <ul className= 'brands'>
                            {brands().map(brand =>
                                <li key={brand}>
                                    <Link to={`/LiTo/shop/${brand}`}>{brand}</Link>
                                </li>
                            )}
                        </ul>
                    </li>
                </ul>
                <ul>
                    <li>
                        <TfiSearch />
                    </li>
                    <li onClick={showCart}>
                        <AiOutlineShoppingCart />
                    </li>
                </ul>
            </div>
        </nav>
    )
}
