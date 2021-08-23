import React from 'react';
import './product.css'

export const Product = ({ products }) => {
   
    let priceProduct = products.quantity * products.price

    return (
        <div className="product" >
            <p>{products.product}</p>
            <p>{products.quantity}</p>
            <p>{products.price}</p>
            <p> { priceProduct }</p>
        </div>
    )
}
