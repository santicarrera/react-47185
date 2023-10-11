import { collection, getDocs } from "firebase/firestore";
import { db } from './config';

const obtenerProductos = async () => {
  const productosRef = collection(db, "productos");
  const productosSnapshot = await getDocs(productosRef);
  
  const productos = [];
  productosSnapshot.forEach((doc) => {
    productos.push({ id: doc.id, ...doc.data() });
  });

  return productos;
};

export { obtenerProductos };