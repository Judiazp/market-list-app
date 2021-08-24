import React from 'react';
import './product.css'

export const Product = ({ products }) => {
    
    return (
        <div className="product" >
            <p>{products.product}</p>
            <p>{products.quantity}</p>
            <p>{products.price}</p>
            <p> { products.quantity * products.price }</p>
        </div>
    )
}
