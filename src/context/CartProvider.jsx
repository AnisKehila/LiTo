import { useState,useRef, createContext } from "react"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { formatPrice } from "../utils/priceFormater"
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
        const existingItemIndex = cartItems.findIndex(cartItem => cartItem.name === item.name);
        const updatedCartItems = existingItemIndex > -1
            ? cartItems.map((cartItem, index) => index === existingItemIndex
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem)
            : [...cartItems, item];
        setCartItems(updatedCartItems);
    }
    function dicreaseItem(item) {
        const existingItemIndex = cartItems.findIndex(cartItem => cartItem.name === item.name);
        const updatedCartItems =
            cartItems.map((cartItem, index) => 
                index === existingItemIndex
                    ? cartItem.quantity > 1
                        ? { ...cartItem, quantity: cartItem.quantity - 1 }
                        : null
                    : cartItem
            ).filter(cartItem => cartItem !== null);
        setCartItems(updatedCartItems);
    }

    function ShowItems() {
        return cartItems.map(item => 
            <div className="car-card" key={item.name}>
                <img src={item.front} alt="car-img" />
                <div className="car-info">
                    <span className="name">{ item.brand + " " + item.name }</span>
                    <div className="quantity">
                        <span className="func-btn" onClick={() => dicreaseItem(item)}>
                            <AiOutlineMinus/>
                        </span>
                        <span className="value">
                            {item.quantity} 
                        </span> 
                        <span className="func-btn" onClick={() => addItem(item)}> 
                            <AiOutlinePlus /> 
                        </span>
                    </div>
                    <span className="price">{formatPrice(item.quantity * item.price)}</span>
                </div>
            </div>    
        )
    }
    function totalItems() {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    }
    function totalPrice() {
        return formatPrice(cartItems.reduce((total, item) => total + (item.price * item.quantity), 0));
    }
    const value = {
        cartItems,
        showCart,
        hideCart,
        addItem,
        totalItems,
        totalPrice,
        cartRef,
        ShowItems,
        cartOpen
    }    
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}
