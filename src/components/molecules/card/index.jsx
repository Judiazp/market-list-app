import React, { useState } from 'react'
import { Button } from '../../atoms/button'
import { ProductList } from '../../organisms/productList'
import './card.css'

export const Card = ({title, id , setMarketList, products}) => {

    const [openList, setOpenList] = useState(false)

    const handleClickViewList = () => {
        setOpenList( !openList.open )
    }

    return (
        <div 
            className="card" 
        >
            <h2>{ title }</h2>
            <div className="content-button">
                <Button text="Ver lista" click={ handleClickViewList } />
                <Button text="Eliminar lista" color="rgb(229,61,47)" />
            </div>
            { openList && 
                (
                    <ProductList 
                        products={ products }
                        setMarketList={ setMarketList } 
                        id={id} 
                        setOpenList={ setOpenList } 
                        openList={ openList } 
                    />
                ) 
            }
        </div>
    )
}
