import React, { useState } from 'react'
import { Button } from '../../atoms/button'
import { ProductList } from '../../organisms/productList'
import './card.css'

export const Card = ({title, id}) => {

    const [openList, setOpenList] = useState(false)

    const handleClickViewList = () => {
        setOpenList(!openList)
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
            { openList && <ProductList id={id} /> }
        </div>
    )
}
