import React from 'react';
import { updateStock } from '../../services/api';

const PurchaseSimulation = ({ productId, currentStock }) => {
    const handlePurchase = async () => {
        if (currentStock > 0) {
            try {
                await updateStock(productId, currentStock - 1); 
                alert('Compra realizada con éxito');
            } catch (error) {
                console.error('Error al actualizar el stock', error);
                alert('Error al realizar la compra');
            }
        } else {
            alert('No hay stock disponible');
        }
    };

    return (
        <div>
            <button onClick={handlePurchase}>Buy</button> 
        </div>
    );
};

export default PurchaseSimulation;
