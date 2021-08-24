import React from 'react';
import { Product } from '../../molecules/product';
import './grid.css'

export const Grid = ({products}) => {

    return (
        <div className="content-product">
            {
                products.map(item => {
                    return <Product key={ item.id } products={ item } />
                })
            }
        </div>
    )
}
