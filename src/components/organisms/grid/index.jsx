import React from 'react';
import { Product } from '../../molecules/product';
import './grid.css'

export const Grid = ({products, update, deleteProduct }) => {

    return (
        <div className="content-product">
            {
                products.map(item => {
                    return <Product 
                                key={ item.id } 
                                product={ item }
                                update={ update }
                                deleteProduct={ deleteProduct }
                            />
                })
            }
        </div>
    )
}
