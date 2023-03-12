import logo from '../assets/Logo/logo-no-background.svg'
import { Link } from 'react-router-dom'
import { TfiSearch } from 'react-icons/tfi'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { IoMdArrowDropdown } from 'react-icons/io'
import { brands } from '../utils/brands'
import { useEffect, useRef, useState } from 'react'
export default function Navbar({className}) {
    const dropDownref = useRef(null);
    const [dropDown, setDropDown] = useState(false);
    useEffect(() => {
        function handleClick() {
            if (dropDownref.current && !dropDownref.current.contains(event.target)) {
                setDropDown(false)
            }
        }    
        document.addEventListener('mousedown', handleClick)
        return () => document.removeEventListener('mousedown', handleClick)
    }, [dropDownref]);
    function dropDownHandler() {
        setDropDown(!dropDown)
    }   
    return (
        <nav className={className}>
            <Link to='/LiTo' ><img src={logo} alt="logo" /></Link>
            <div className='links'>
                <ul>
                    <li><Link to='/LiTo/shop'>Shop</Link></li>
                    <li className='brand' onClick={dropDownHandler} ref={dropDownref}>
                        <Link>Brands <IoMdArrowDropdown /></Link>
                        <ul className={`brands${dropDown ? ' active' : ''}`}>
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
                        <AiOutlineShoppingCart />
                    </li>
                </ul>
            </div>
        </nav>
    )
}
