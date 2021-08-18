import React, { useState } from 'react'
import { Button } from '../../atoms/button'
import './card.css'

export const Card = ({title, id}) => {

    const [openList, setOpenList] = useState(false)

    const handleClickViewList = () => {
        setOpenList(true)
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
        </div>
    )
}
