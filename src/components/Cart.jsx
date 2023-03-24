import { useContext } from "react";
import { CartContext } from "../context/CartProvider";

export default function Cart() {
    const { showCart, hideCart, cartOpen, cartRef, totalItems, totalPrice } = useContext(CartContext);
    return (
        <>
        <button onClick={showCart}>Open Cart</button>

        {cartOpen && (
            <div className="cart" ref={cartRef}>
                <div className="cart-info">
                <button onClick={hideCart}>Close Cart</button>
                    <p>Total Items: {totalItems()}</p>
                    <p>Total Price: ${totalPrice()}</p>
                </div>
            </div>
        )}
        </>
    );
}