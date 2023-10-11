import React, { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useCart } from './CartContext';
import '../DetalleProducto.css';
import { getFirestore } from "firebase/firestore";
import { app, db } from "../Firebase/config";



const DetalleProducto = () => {
  const { id } = useParams();
  const location = useLocation();
  const { producto } = location.state || {};

  const {addToCart} = useCart();
  const [cantidad, setCantidad] = useState(1);
  
  const handleCantidadChange = (event) => {
    const nuevaCantidad = parseInt(event.target.value, 10);
    // Verificar si la nueva cantidad está dentro del stock disponible
    if (nuevaCantidad <= producto.stock && nuevaCantidad > 0) {
      setCantidad(nuevaCantidad);
    }
  };

  const handleAgregarAlCarrito = () => {
    // Verificar si la cantidad seleccionada está dentro del stock disponible
    if (cantidad <= producto.stock && cantidad > 0) {
      addToCart({ ...producto, cantidad: cantidad });
    } else {
      // Mostrar un mensaje de error o hacer algo cuando no hay suficiente stock
      console.log('No hay suficiente stock');
    }
  };


  return (
    <div className="text-center">
      <h1>"Lo Nuevo"</h1>
      {producto ? (
        <div>
          <div className="producto-card">
            <img className="producto-img" src={producto.imagen} alt={producto.nombre} />
            <div className="producto-content">
              <h2>{producto.nombre}</h2>
              <p>Precio: ${producto.precio}</p>
              <div className="cantidad-container">
              <label>Cantidad:</label>
              <input type="number"value={cantidad} onChange={handleCantidadChange} min="1"/>
              </div>
              
              <button className="btn btn-primary" onClick={handleAgregarAlCarrito}>Añadir al carrito</button>
            </div>
            <div className="descripcion">
              <h3>Características</h3>
              <p>{producto.descripcion}</p>
            </div>
          </div>
        </div>
      ) : (
        <p>Producto no encontrado</p>
      )}
    </div>
  );
};

export default DetalleProducto;