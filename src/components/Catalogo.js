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
    descripcion:'Descubre lo que te mueve en nuestro último AF1. Al combinar la comodidad de la cancha con un estilo fuera de la cancha, te brinda un relato divertido inspirado en la historia de Nike de las personas en movimiento. La parte superior de tela, las agujetas elásticas y los detalles bordados hacen alusión a la ficticia "NIKE MOVING CO". ¿Y ahora qué?',
  },
  {
    id: 3,
    nombre: 'Nike Air Force 1 07 Mid',
    precio: 60000,
    imagen: producto3,
    descripcion:'El Air Force 1 07 tiene todo lo que amas: revestimientos nítidos, detalles audaces y la cantidad perfecta de destellos para que brille tu calzado. El cuello acolchado de corte medio con un cierre por contacto clásico combina versatilidad de estilo con la comodidad del básquetbol tradicional, mientras que las perforaciones en la punta mantienen la frescura.',
  },
  {
    id: 4,
    nombre: 'Nike Air Force 1 07 LX',
    precio: 70000,
    imagen: producto4,
    descripcion:'En la historia del calzado deportivo, pocos estilos perduran. Sólo uno trasciende todas las épocas: el Nike Air Force 1 07 LX. Celebra la perfección con el calzado de básquetbol original que ofrece lo que conoces mejor: tela tejida, detalles audaces y un poco de destello adicional para mantener tu brillo.',
  },
  {
    id: 5,
    nombre: 'Nike Air Force 1 07',
    precio: 83000,
    imagen: producto5,
    descripcion:'La luminosidad sigue viva con este calzado de básquetbol original. Con un diseño que combina la comodidad para la cancha con un estilo para usar fuera de la cancha, este calzado da un nuevo giro a su ya característico estilo de otra época, su confección de los 80 y su estilo impecable.',
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