import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import '../DetalleProducto.css';

const DetalleProducto = () => {
  const { id } = useParams();
  const location = useLocation();
  const { producto } = location.state || {};

  return (
    <div className="text-center">
      <h1>Detalle del Producto</h1>
      {producto ? (
        <div className="producto-card">
          <img className="producto-img" src={producto.imagen} alt={producto.nombre} />
          <div className="producto-content">
            <h2>{producto.nombre}</h2>
            <p>Precio: ${producto.precio}</p>
            <button className="btn btn-primary">Añadir al carrito</button>
          </div>
        </div>
      ) : (
        <p>Producto no encontrado</p>
      )}
    </div>
  );
};

export default DetalleProducto;