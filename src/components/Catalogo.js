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
    nombre: 'Nike Air Force 1 07 LV8',
    precio: 70000,
    imagen: producto1,
    descripcion:'El Nike Air Force 1 LV8 esta nadando en las buenas vibras de un dia de playa. Los graficos de verano y los colores color arena mantienen la sensación vacacional de la leyenda del basquetbol. La parte superior de cuero sintetico y la amortiguación Nike Air ofrecen un estilo de primer nivel y comodidad para que puedas usarlo todo el dia.',
  },
  {
    id: 2,
    nombre: 'Nike Air Force 1 07 LV8',
    precio: 70000,
    imagen: producto2,
  },
  {
    id: 3,
    nombre: 'Nike Air Force 1 07 Mid',
    precio: 60000,
    imagen: producto3,
  },
  {
    id: 4,
    nombre: 'Nike Air Force 1 07 LX',
    precio: 70000,
    imagen: producto4,
  },
  {
    id: 5,
    nombre: 'Nike Air Force 1 07',
    precio: 83000,
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