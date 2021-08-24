import React from 'react';
import '@fortawesome/react-fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faMinusSquare } from '@fortawesome/free-solid-svg-icons';
import './product.css'

export const Product = ({ products }) => {
    
    console.log(products.id);

    const color = { 
        background: (products.id % 2 === 0) ? 'rgba(0, 0, 0, 0.1)' : ''
    }

    return (
        <div className="product" style={color}>
            <p>
                <span>Producto:</span>
                {products.product}
            </p>
            <p>
                <span>Cantidad:</span>
                {products.quantity}
            </p>
            <p>
                <span>Precio:</span>
                {products.price}
            </p>
            <p> 
                <span>Precio total:</span>
                { products.quantity * products.price }
            </p>
            <div className="content-buttons">
                <div className="buttons edit" title="Editar">
                    <FontAwesomeIcon icon={faEdit} />
                    <span>
                       Editar
                    </span>
                </div>
                <div className="delete buttons" title="Eliminar">
                    <FontAwesomeIcon icon={faMinusSquare} />
                    <span>
                        Eliminar
                    </span>
                </div>

            </div>
        </div>
    ) 
}
