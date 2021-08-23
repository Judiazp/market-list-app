import React, { useEffect, useState } from 'react';
import { Footer } from '../../molecules/footer';
import { Header } from '../../molecules/header';
import { Grid } from '../../organisms/grid';
import { AddProductList } from '../../organisms/forms/addProductList';
import './markets.css'

export const Markets = () => {

    const initialMarketListState = JSON.parse(localStorage.getItem('market-list')) || []

    const [products, setProducts] = useState(initialMarketListState)

    useEffect(() => {
        localStorage.setItem(`market-list`, JSON.stringify(products))
    }, [products])

    const addProduct = (object) => {
        setProducts([
            object,
            ...products
        ])
    }

    return (
        <div className="content-market-list-app">
            <Header />
            <div className="content-form-market-list">
                <div className="content-grid-market-list">
                    <h1>Agrega productos</h1>
                    <AddProductList addProduct={ addProduct } />
                    <div className="content-grid">
                        <Grid products={ products } />
                    </div>
                    <h3>Total de mercado: {  }  </h3>
                </div>
            </div>
            <Footer />
        </div>
    )
}
