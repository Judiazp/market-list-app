import React, { useEffect } from 'react'
import './product-list.css'
import { AddProductList } from '../forms/addProductList';
import { useState } from 'react';
import { Product } from '../../molecules/product';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';

export const ProductList = ({id, setOpenList, openList, setMarketList}) => {

    const initialProductsState = JSON.parse(localStorage.getItem('product-list')) || []

    const [products, setProducts] = useState(initialProductsState)

    useEffect(() => {
        localStorage.setItem(`product-list`, JSON.stringify(products))
    }, [products])
    
    const addProduct = (object) => {
        setProducts([
            object,
            ...products
        ])
    }
            
    return (
        <div className="content-list">
            <div className="create-list" >
                <span onClick={ (e) => setOpenList(!openList) }>
                    <FontAwesomeIcon icon={ faWindowClose } />
                </span>
                <AddProductList addProduct={ addProduct } />
                <div className="content-product">
                    { products.map(item => {
                        return <Product key={id+1} products={ item } />
                    }) }
                </div>
            </div>
        </div>
    )
}
