import React, { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import '../DetalleProducto.css';

const DetalleProducto = () => {
  const { id } = useParams();
  const location = useLocation();
  const { producto } = location.state || {};
  
  // Estado local para la cantidad de productos en el carrito
  const [cantidad, setCantidad] = useState(1);

  // Función para manejar el incremento de la cantidad
  const aumentarCantidad = () => {
    setCantidad(cantidad + 1);
  };

  // Función para manejar la disminución de la cantidad
  const disminuirCantidad = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
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
                <button className="cantidad-btn" onClick={disminuirCantidad}>-</button>
                <span className="cantidad">{cantidad}</span>
                <button className="cantidad-btn" onClick={aumentarCantidad}>+</button>
              </div>
              
              <button className="btn btn-primary">Añadir al carrito</button>
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