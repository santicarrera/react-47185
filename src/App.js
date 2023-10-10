import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Catalogo from './components/Catalogo';
import DetalleProducto from './components/DetalleProducto';
import { CartProvider } from './components/CartContext';
import Cart from './components/Cart';


function App() {
  return (
    <div className='App'>
      <CartProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} index={true} />
        <Route path="/home" element={<ItemListContainer />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/producto/:id" element={<DetalleProducto />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      </CartProvider>
    </div>
  );
}

export default App; 