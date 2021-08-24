import React, { useEffect, useState } from 'react';
import { Footer } from '../../molecules/footer';
import { Header } from '../../molecules/header';
import { Grid } from '../../organisms/grid';
import { AddProductList } from '../../organisms/forms/addProductList';
import './markets.css'

export const Markets = () => {

    const initialMarketListState = JSON.parse(localStorage.getItem('market-list')) || []

    const [products, setProducts] = useState(initialMarketListState)

    
    const addProduct = (object) => {

        const newProduct = {
            product: object.product,
            quantity: object.quantity,
            price: object.price,
            id: new Date().getTime()
        } 

        setProducts([
            newProduct,
            ...products
        ])
    }
            
    const calculeMarkets = () => {
        let priceMarkets = 0
        let priceProducts = []

        products.forEach(element => {
            priceProducts.push(element.price * element.quantity)
        })

        priceProducts.forEach(element =>{
            return priceMarkets += element
        })

        return priceMarkets
    }
    
    useEffect(() => {
        localStorage.setItem(`market-list`, JSON.stringify(products))
    }, [products])

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
                    <h3>Total de mercado: { calculeMarkets() }  </h3>
                </div>
            </div>
            <Footer />
        </div>
    )
}
