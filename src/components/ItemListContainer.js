import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../ItemListContainer.css';

const categories = [
{ id: 1, name: 'Zapatillas', imageUrl: 'https://nikearprod.vtexassets.com/arquivos/ids/636938-1200-1200?v=638210736281070000&width=1200&height=1200&aspect=true' },
{ id: 2, name: 'Buzos', imageUrl: 'https://nikearprod.vtexassets.com/arquivos/ids/211354-1000-1000?v=638098219550800000&width=1000&height=1000&aspect=true' },
{ id: 3, name: 'Remeras', imageUrl: 'https://nikearprod.vtexassets.com/arquivos/ids/649237-1000-1000?v=638212487347700000&width=1000&height=1000&aspect=true' },
];

const ItemListContainer = () => {
return (
    <div className='text-center'>
        <h1 className='text-center mb-4'>Categorías</h1>
        <div className='carousel-container mt-4'>
        <Carousel className="w-95 mx-auto h-70">
            {categories.map((category) => (
            <Carousel.Item key={category.id}>
                <Link to="/catalogo"> {/* Redirige al catálogo */}
                <img
                className='d-block w-100'
                src={category.imageUrl}
                alt={category.name}
                />
                </Link>
                <Carousel.Caption>
                <h3>{category.name}</h3>
                </Carousel.Caption>
            </Carousel.Item>
            ))}
        </Carousel>
        </div>
    </div>
    );
};

export default ItemListContainer;