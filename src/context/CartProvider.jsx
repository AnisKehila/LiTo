import { useState,useRef, createContext } from "react"

export const CartContext = createContext();
export default function CartProvider({children}) {
    const [cartItems, setCartItems] = useState([]);
    const [cartOpen, setCartOpen] = useState(false);
    const cartRef = useRef(null);

    function showCart() {
        setCartOpen(true);
    }
    function hideCart() {
        setCartOpen(false);
    }
    function addItem(item) {
        setCartItems(prevItems => [...prevItems, item]);
    }
    function removeItem(item) {
        setCartItems(prevItems => prevItems.filter(i => i !== item));
    }
    function totalItems() {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    }
    function totalPrice() {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    }
    const value = {
        cartItems,
        showCart,
        hideCart,
        addItem,
        removeItem,
        totalItems,
        totalPrice,
        cartRef,
        cartOpen
    }    
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}
