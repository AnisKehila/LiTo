import { useContext, useEffect } from "react"
import { CartContext } from "../context/CartProvider"
import { GrClose } from "react-icons/gr"
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { Link } from "react-router-dom"
export default function Cart() {
    const { hideCart, cartOpen, cartRef, totalItems, totalPrice, ShowItems } = useContext(CartContext);
    useEffect(() => {
        const handleClick = (event) => {
            if(cartRef.current && !cartRef.current.contains(event.target)) {
                hideCart();
            }
        }
        document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    })
    return (
        <div className={`cart${cartOpen ? ' active': ''}`}>
            <div className="overlay">
            </div>
            <div className="cart-info" ref={cartRef}>
                <div className="cart-header">
                    <h1>Your shopping cart</h1>
                    <span onClick={hideCart} className="close-btn" ><GrClose /></span>
                </div>
                {
                    totalItems() === 0 ? (
                        <div className="cart-empty">
                            Looks like your cart is empty!
                            <HiOutlineShoppingBag />
                        </div>
                    ) : (
                        <div className="cart-body">
                            <ShowItems />
                        </div>
                    )
                }
                <div className="cart-footer">
                    {
                        totalItems() === 0 ? (
                            <button onClick={hideCart}>
                                <Link to='/LiTo/shop'>Explore cars</Link>
                            </button>
                        ) : (<>
                                <span className="total">Total: {totalPrice()}</span>
                                <button onClick={hideCart}>
                                    <Link to='/LiTo'>CHECKOUT</Link>
                                </button>
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    );
}