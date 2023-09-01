import NavBar from '../src/components/NavBar';
import React from 'react'
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className='App'>
      <NavBar/>
      <ItemListContainer greeting="Bienvenidos a Mi Tienda"/>
    </div>
  );
}

export default App;
