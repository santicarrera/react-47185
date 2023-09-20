import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Catalogo from './components/Catalogo';
import DetalleProducto from './components/DetalleProducto';


function App() {
  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route path="/home" element={<ItemListContainer />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/producto/:id" element={<DetalleProducto />} />
      </Routes>
    </div>
  );
}

export default App; 