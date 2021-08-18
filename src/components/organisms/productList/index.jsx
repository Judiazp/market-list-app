import React from 'react'
import './product-list.css'
import { AddProductList } from '../forms/addProductList';
import { useState } from 'react';
import { Product } from '../../molecules/product';

export const ProductList = ({id}) => {

    const [products, setProducts] = useState([])

    const addProduct = (object) => {
        setProducts([
            object,
            ...products
        ])
    }
    console.log(products);
    
    return (
        <div className="content-list">
            <div className="create-list" >
                <AddProductList addProduct={ addProduct } />
                { products.map(item => {
                    return <Product key={id} products={ item } />
                }) }
            </div>
        </div>
    )
}
