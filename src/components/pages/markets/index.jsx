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
            id: products.length
        } 

        setProducts([
            newProduct,
            ...products
        ])
    }

    const update = ( object, id) => {
        const newProduct = products.map(element => {
            if (element.id === id) {
                element.product = object.product
                element.quantity = object.quantity
                element.price = object.price    
            }
            return element;
        })
        setProducts( newProduct )
    }

    const deleteProduct = (id) => {
        const productDelete = products.filter(element => element.id !== id)
        setProducts(productDelete)
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
        localStorage.setItem('market-list', JSON.stringify(products))
    }, [products])

    return (
        <div className="content-market-list-app">
            <Header />
            <div className="content-form-market-list">
                <div className="content-grid-market-list">
                    <h2>Total de mercado: { calculeMarkets() }  </h2>
                    <AddProductList addProduct={ addProduct } />
                    <div className="table-information">
                        <p>Producto</p>
                        <p>Cantidad</p>
                        <p>Precio</p>
                        <p>Costo total</p>
                        <p>Editar</p>
                    </div>
                    <div className="content-grid">
                        <Grid products={ products } update={ update } deleteProduct={ deleteProduct }/>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
