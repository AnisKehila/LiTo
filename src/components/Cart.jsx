import { useContext, useEffect } from "react";
import { CartContext } from "../context/CartProvider";
import { GrClose } from "react-icons/gr"
export default function Cart() {
    const { hideCart, cartOpen, cartRef, totalItems, totalPrice } = useContext(CartContext);
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
                <p>Total Items: {totalItems()}</p>
                <p>Total Price: ${totalPrice()}</p>
            </div>
        </div>
    );
}