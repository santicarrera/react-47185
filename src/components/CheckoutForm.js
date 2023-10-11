import React, { useState } from 'react';
import { useCart } from './CartContext';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../Firebase/config';
import '../CheckoutForm.css';

const CheckoutForm = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        telefono: '',
        correo: '',
        confirmarCorreo: '',
    });
    const [errors, setErrors] = useState({});
    const { cart } = useCart()
    const [compraExitosa, setCompraExitosa] = useState(false);
    const vaciarCarrito = useCart().vaciarCarrito;


    const validateForm = () => {
        const errors = {};

        if (!formData.nombre.trim()) {
            errors.nombre = 'El nombre es requerido';
        }

        if (!formData.telefono.trim()) {
            errors.telefono = 'El número de teléfono es requerido';
        } else if (!/^\d{10}$/i.test(formData.telefono.trim())) {
            errors.telefono = 'Número de teléfono inválido';
        }

        if (!formData.correo.trim()) {
            errors.correo = 'El correo electrónico es requerido';
        } else if (!/\S+@\S+\.\S+/.test(formData.correo.trim())) {
            errors.correo = 'Correo electrónico inválido';
        }
        if (formData.correo.trim() !== formData.confirmarCorreo.trim()) {
            errors.confirmarCorreo = 'Los correos electrónicos no coinciden';
        }
        

        return errors;
    };

    const guardarOrdenEnDB = async (orden) => {
        try {
            const ordenesRef = collection(db, 'ordenes');
            await addDoc(ordenesRef, orden);
          // La orden se ha guardado correctamente en la base de datos
            console.log('Orden guardada exitosamente en la base de datos.');
        } catch (error) {
          // Manejar cualquier error que ocurra al guardar la orden
            console.error('Error al guardar la orden:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = validateForm();
        setErrors(errors);
    
        if (Object.keys(errors).length === 0) {
        const orden = {
            productos: cart,
            fecha: new Date(),
            // Otra información relevante, como el nombre del cliente, dirección, etc.
        };
    
          // Guardar la orden en la base de datos
        await guardarOrdenEnDB(orden);
        const numeroOrden = '123456'; // Ejemplo: puedes generar un número de orden único aquí
        alert(`Compra realizada exitosamente. Número de orden: ${numeroOrden}`);

        vaciarCarrito();
        setCompraExitosa(true);
        }
    };

    return (
        <div className="center-container">
            <div className="card">
            <div className="form-container">
            <h1>Formulario de Checkout</h1>
            {compraExitosa ? (
                <div className="mensaje-exitoso">
                    <p>Compra realizada exitosamente.¡Gracias por tu compra!</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Nombre:</label>
                        <input
                            type="text"
                            value={formData.nombre}
                            onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                        />
                        {errors.nombre && <span className="error-message">{errors.nombre}</span>}
                    </div>
                    <div className="form-group">
                        <label>Número de Teléfono:</label>
                        <input
                            type="text"
                            value={formData.telefono}
                            onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                        />
                        {errors.telefono && <span className="error-message">{errors.telefono}</span>}
                    </div>
                    <div className="form-group">
                        <label>Correo Electrónico:</label>
                        <input
                            type="email"
                            value={formData.correo}
                            onChange={(e) => setFormData({ ...formData, correo: e.target.value })}
                        />
                        {errors.correo && <span className="error-message">{errors.correo}</span>}
                    </div>
                    <div className="form-group">
                        <label>Confirmar Correo Electrónico:</label>
                        <input
                            type="email"
                            value={formData.confirmarCorreo}
                            onChange={(e) => setFormData({ ...formData, confirmarCorreo: e.target.value })}
                        />
                        {errors.confirmarCorreo && <span className="error-message">{errors.confirmarCorreo}</span>}
                    </div>
                    <button type="submit">Finalizar Compra</button>
                </form>
                    )}
            </div>
            </div>
        </div>
    );
};

export default CheckoutForm;