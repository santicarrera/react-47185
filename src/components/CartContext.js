import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
const [cart, setCart] = useState([]);

const addToCart = (product) => {
    // Verificar si el producto ya está en el carrito
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      // Si el producto ya está en el carrito, incrementar la cantidad
    setCart((prevCart) =>
        prevCart.map((item) =>
        item.id === product.id ? { ...item, cantidad: item.cantidad + 1 } : item
        )
    );
    } else {
      // Si el producto no está en el carrito, agregarlo con cantidad 1
    setCart([...cart, { ...product, cantidad: 1 }]);
    }
};

const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== productId));
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