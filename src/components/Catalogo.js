import React from 'react';
import { Link } from 'react-router-dom';
import producto1 from '../producto1.jpg';
import producto2 from '../producto2.jpg';
import producto3 from '../producto3.jpg';
import producto4 from '../producto4.jpg';
import producto5 from '../producto5.jpg';
import '../Catalogo.css';

const productos = [
  {
    id: 1,
    nombre: 'Nike Air Jordan Green',
    precio: 70000,
    imagen: producto1,
  },
  {
    id: 2,
    nombre: 'Nike Air Jordan Pink',
    precio: 70000,
    imagen: producto2,
  },
  {
    id: 3,
    nombre: 'Nike Air Jordan Red&Black',
    precio: 60000,
    imagen: producto3,
  },
  {
    id: 4,
    nombre: 'Nike Air Jordan Orange&Black',
    precio: 70000,
    imagen: producto4,
  },
  {
    id: 5,
    nombre: 'Nike Air Jordan Limited Edition',
    precio: 85000,
    imagen: producto5,
  },
];

const Catalogo = () => {
return (
    <div>
        <h1 className='h1'>NIKE AIR JORDAN</h1>
        <div className="productos">
        {productos.map((producto) => (
            <div key={producto.id} className="producto-card">
                <Link to={`/producto/${producto.id}`} state={{ producto }}>
                <img className="producto-img" src={producto.imagen} alt={producto.nombre} />
                <div className="producto-content">
                    <h2>{producto.nombre}</h2>
                    <p>Precio: ${producto.precio}</p>
                </div>
                </Link>
            </div>
        ))}
        </div>
        </div>
    );
};

export default Catalogo;