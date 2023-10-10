import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import producto1 from '../producto1.jpg';
import producto2 from '../producto2.jpg';
import producto3 from '../producto3.jpg';
import producto4 from '../producto4.jpg';
import producto5 from '../producto5.jpg';
import buzo1 from '../buzo1.jpg';
import buzo2 from '../buzo2.jpg';
import buzo3 from '../buzo3.jpg';
import buzo4 from '../buzo4.jpg';
import buzo5 from '../buzo5.jpg';
import remera1 from '../remera1.jpg';
import remera2 from '../remera2.jpg';
import remera3 from '../remera3.jpg';
import remera4 from '../remera4.jpg';
import remera5 from '../remera5.jpg';
import '../Catalogo.css';

const productos = [
  {
    id: 1,
    nombre: 'Nike Air Force 1 07 LV8',
    precio: 70000,
    imagen: producto1,
    descripcion:'El Nike Air Force 1 LV8 esta nadando en las buenas vibras de un dia de playa. Los graficos de verano y los colores color arena mantienen la sensación vacacional de la leyenda del basquetbol. La parte superior de cuero sintetico y la amortiguación Nike Air ofrecen un estilo de primer nivel y comodidad para que puedas usarlo todo el dia.',
    categoria:'zapatillas',
    stock: 10,
  },
  {
    id: 2,
    nombre: 'Nike Air Force 1 07 LV8',
    precio: 70000,
    imagen: producto2,
    descripcion:'Descubre lo que te mueve en nuestro último AF1. Al combinar la comodidad de la cancha con un estilo fuera de la cancha, te brinda un relato divertido inspirado en la historia de Nike de las personas en movimiento. La parte superior de tela, las agujetas elásticas y los detalles bordados hacen alusión a la ficticia "NIKE MOVING CO". ¿Y ahora qué?',
    categoria:'zapatillas',
    stock: 10,
  },
  {
    id: 3,
    nombre: 'Nike Air Force 1 07 Mid',
    precio: 60000,
    imagen: producto3,
    descripcion:'El Air Force 1 07 tiene todo lo que amas: revestimientos nítidos, detalles audaces y la cantidad perfecta de destellos para que brille tu calzado. El cuello acolchado de corte medio con un cierre por contacto clásico combina versatilidad de estilo con la comodidad del básquetbol tradicional, mientras que las perforaciones en la punta mantienen la frescura.',
    categoria:'zapatillas',
    stock: 10,
  },
  {
    id: 4,
    nombre: 'Nike Air Force 1 07 LX',
    precio: 70000,
    imagen: producto4,
    descripcion:'En la historia del calzado deportivo, pocos estilos perduran. Sólo uno trasciende todas las épocas: el Nike Air Force 1 07 LX. Celebra la perfección con el calzado de básquetbol original que ofrece lo que conoces mejor: tela tejida, detalles audaces y un poco de destello adicional para mantener tu brillo.',
    categoria:'zapatillas',
    stock: 10,
  },
  {
    id: 5,
    nombre: 'Nike Air Force 1 07',
    precio: 83000,
    imagen: producto5,
    descripcion:'La luminosidad sigue viva con este calzado de básquetbol original. Con un diseño que combina la comodidad para la cancha con un estilo para usar fuera de la cancha, este calzado da un nuevo giro a su ya característico estilo de otra época, su confección de los 80 y su estilo impecable.',
    categoria:'zapatillas',
    stock: 10,
  },

/////////////////////////////////////////////////////////BUZOS///////////////////////////////////////////

  {
    id: 6,
    nombre: 'Nike Dry Graphic',
    precio: 43000,
    imagen: buzo1,
    descripcion:'El buzo con capucha Nike Dry Graphic cuenta con tecnología absorbente de sudor que te ayuda a mantener la transpirabilidad antes, durante y después del entrenamiento. Este producto está confeccionado con un 100% de materiales sustentables, con una mezcla de fitops de poliéster reciclado y de algodón orgánico. La mezcla contiene al menos un 10% de fitops recicladas o al menos un 10% de fitops de algodón orgánico.',
    categoria:'buzos',
    stock: 10,
  },
  {
    id: 7,
    nombre: 'NikeLab',
    precio: 37000,
    imagen: buzo2,
    descripcion:'Tejido polar de primera calidad y el diseño de la espalda destaca la sudadera con capucha NikeLab. Esta pieza, que forma parte de la colección Essentials, utiliza un tacto suave con un ajuste holgado para usar todo el día.',
    categoria:'buzos',
    stock: 10,
  },
  {
    id: 8,
    nombre: 'Nike Sportswear Tech Fleece',
    precio: 40000,
    imagen: buzo3,
    descripcion:'Confeccionado para el áspero paisaje urbano, el Nike Lahar Low te brinda un diseño retro tan duro como listo para la vida de la ciudad.Confeccionado con cuero resistente, cuenta con detalles del Lahar Escape Boot del 89 para lograr un look clásico.La suela resistente, las agujetas gruesas y los ojales de metal te harán gobernar las calles y los senderos.',
    categoria:'buzos',
    stock: 10,
  },
  {
    id: 9,
    nombre: 'Los Pumas World Cup Edition',
    precio: 38000,
    imagen: buzo4,
    descripcion:'Llevá la pasión con vos a todos lados con el buzo de Los Pumas World Cup Edition 22/23.',
    categoria:'buzos',
    stock: 10,
  },
  {
    id: 10,
    nombre: 'Nike Air',
    precio: 45000,
    imagen: buzo5,
    descripcion:'La colección Nike Air rinde homenaje al calzado deportivo que ayudó a definir la marca Swoosh a través de las décadas. este buzo con capucha sin cierre está confeccionada con una tela French Terry de alta densidad para brindar calidez y comodidad suaves y duraderas. Un gráfico sutil Nike Air estampado en el pecho y bajando por los ribetes de las costuras eleva el acabado.',
    categoria:'buzos',
    stock: 10,
  },
  /////////////////////////////////////////////////////REMERAS////////////////////////////////////////////////////////
  {
    id: 11,
    nombre: 'Paris Saint-Germain',
    precio: 24000,
    imagen: remera1,
    descripcion:'Luce esta remera con la colaboración Paris Saint-Germain al mismo tiempo que miras el próximo gran partido. Está confeccionada con algodón estructurado de alta densidad con un bolsillo superpuesto para un look clásico.',
    categoria:'camisetas',
    stock: 10,
  },
  {
    id: 12,
    nombre: 'Paris Saint-Germain Strike Fourth',
    precio: 27000,
    imagen: remera2,
    descripcion:'La remera cuenta con detalles de diseño específicamente pensados para las estrellas más prometedoras del fútbol. Un ajuste entallado y estilizado garantiza que nada se interpondrá entre el balón y tú, y su tecnología absorbente de sudor te ayuda a mantener la frescura y la concentración mientras perfeccionas tus habilidades. Este producto está fabricado al 100% con fibras de poliéster reciclado.',
    categoria:'camisetas',
    stock: 10,
  },
  {
    id: 13,
    nombre: 'Nike DriFIT Strike',
    precio: 43000,
    imagen: remera3,
    descripcion:'Slim y suave, la camiseta Strike absorbente de sudor está lista para los entrenamientos más difíciles, cualquier día y durante cualquier temporada. Está confeccionada como el equipo que usan los profesionales en la cancha, con una sensación transpirable que se puede usar sola o sobre tu remera favorita. Para aumentar la cobertura, agregamos un orificio para el pulgar que mantiene el frío a raya y las mangas en su lugar.',
    categoria:'camisetas',
    stock: 10,
  },
  {
    id: 14,
    nombre: 'Los Pumas World Cup Edition',
    precio: 20000,
    imagen: remera4,
    descripcion:'La remera de Los Pumas edición Rugby World Cup 2023 está hecha para que sientas el honor y coraje que genera llevar puesto estos colores.',
    categoria:'camisetas',
    stock: 10,
  },
  {
    id: 15,
    nombre: 'Jordan Flight MVP 85',
    precio: 30000,
    imagen: remera5,
    descripcion:'Vuela alto con esta playera de estampado en toda la prenda. Está hecha 100% de algodón con ajuste holgado, solo póntela y elévate.',
    categoria:'camisetas',
    stock: 10,
  },
];

const Catalogo = () => {
  const [categoria, setCategoria] = useState('zapatillas');
  const productosFiltrados = productos.filter(producto => producto.categoria === categoria);
  
  let titulo;
  switch (categoria) {
    case 'zapatillas':
      titulo = 'Zapatillas';
      break;
    case 'buzos':
      titulo = 'Buzos';
      break;
    case 'camisetas':
      titulo = 'Camisetas';
      break;
    default:
      titulo = 'NIKE AIR JORDAN';
  }

  return (
    <div>
      <h1 className='h1'>{titulo}</h1>
      <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
        <option value="zapatillas">Zapatillas</option>
        <option value="buzos">Buzos</option>
        <option value="camisetas">Camisetas</option>
      </select>
      <div className="productos">
        {productosFiltrados.map((producto) => (
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