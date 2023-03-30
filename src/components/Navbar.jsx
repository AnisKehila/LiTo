import logo from '../assets/Logo/logo-no-background.svg'
import { Link } from 'react-router-dom'
import { TfiSearch } from 'react-icons/tfi'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { IoMdArrowDropdown } from 'react-icons/io'
import { brands } from '../utils/brands'
import { useContext } from 'react'
import { CartContext } from '../context/CartProvider'
export default function Navbar() {
    const { showCart, totalItems } = useContext(CartContext)
    return (
        <nav>
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
                    <li>
                        <HiOutlineShoppingBag onClick={showCart}/>
                        {totalItems() > 0 && (
                            <span className='total-items'>
                                {totalItems()}
                            </span>
                        )}
                    </li>
                </ul>
            </div>
        </nav>
    )
}
