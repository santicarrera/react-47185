import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Catalogo.css';
import { getFirestore, query, collection, where, getDocs } from "firebase/firestore";
import { db } from "../Firebase/config";

const Catalogo = () => {
  const [productos, setProductos] = useState([]);
  const [categoria, setCategoria] = useState('');

  useEffect(() => {
    const obtenerProductosDesdeFirebase = async () => {
      const productosRef = collection(db, "productos");
      let productosQuery;

      // Si hay una categoría seleccionada, filtra los productos por esa categoría
      if (categoria) {
        productosQuery = query(productosRef, where("categoria", "==", categoria));
      } else {
        // Si no hay categoría seleccionada, obtén todos los productos
        productosQuery = query(productosRef);
      }

      const productosSnapshot = await getDocs(productosQuery);

      const productosObtenidos = [];
      productosSnapshot.forEach((doc) => {
        productosObtenidos.push({ id: doc.id, ...doc.data() });
      });

      setProductos(productosObtenidos);
    };

    obtenerProductosDesdeFirebase();
  }, [categoria]); // El efecto se ejecuta cada vez que cambia la categoría seleccionada

  const handleCategoriaChange = (e) => {
    setCategoria(e.target.value);
  };

  return (
    <div>
      <h1>Catálogo de Productos</h1>
      <select value={categoria} onChange={handleCategoriaChange}>
        <option value="">Todo</option>
        <option value="zapatillas">Zapatillas</option>
        <option value="buzos">Buzos</option>
        <option value="camisetas">Camisetas</option>
      </select>
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