import React from 'react';
import { useCart } from './CartContext';

const CartWidget = () => {
const { cart } = useCart();
const totalItems = cart.reduce((total, product) => total + product.cantidad, 0);

return (
    <div>
        <i className="bi bi-cart3"></i>
        <span>{totalItems}</span>
    </div>
    );
};

export default CartWidget;
