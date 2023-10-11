import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
const [cart, setCart] = useState([]);

const addToCart = (product) => {
    setCart([...cart, product]);
};

const removeFromCart = (productId) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);
};

const vaciarCarrito = () => {
    setCart([]);
};

return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, vaciarCarrito}}>
        {children}
    </CartContext.Provider>
);
};

export const useCart = () => {
const context = useContext(CartContext);
if (!context) {
    throw new Error('useCart must be used within a CartProvider');
}
return context;
};