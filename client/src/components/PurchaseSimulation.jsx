import React from 'react';
import { updateStock } from '../../services/api';


const PurchaseSimulation = ({ productId, currentStock ,amount}) => {
    console.log('ProductID:',productId, 'CurrentStock:',currentStock,'amount',amount)
    const handlePurchase = async () => {
        if (currentStock > 0) {
            try {
                await updateStock(productId, amount); 
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
            <button className='button' onClick={handlePurchase}>Buy</button> 
        </div>
    );
};

export default PurchaseSimulation;
