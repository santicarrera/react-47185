import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';
import '../Cart.css';

const Cart = () => {
const { cart, removeFromCart } = useCart();
const total = cart.reduce((acc, product) => acc + product.precio * product.cantidad, 0);

const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
};

return (
    <div className="cart-container">
        <h1>Carrito de Compras</h1>
        {cart.map((product) => (
        <div key={product.id} className="cart-item">
            <h2>{product.nombre}</h2>
            <img src={product.imagen} alt={product.nombre} />
            <p>Cantidad: {product.cantidad}</p>
            <p>Precio: ${product.precio}</p>
            <button onClick={() => handleRemoveFromCart(product.id)}>Eliminar</button>
        </div>
        ))}
        <div className="total">
            <h3>Total a Pagar: ${total}</h3>
        </div>
        <div className='container-buttons'>
        <div className="checkout-button">
            {cart.length > 0 && <Link to="/checkout">Finalizar Compra</Link>}
        </div>
        <div className='seguir-comprando-button'>
            <Link to="/catalogo">Seguir Comprando</Link>
        </div>
        </div>
    </div>
);
};

export default Cart;