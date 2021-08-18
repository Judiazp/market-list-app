import React from 'react'
import { Card } from '../../molecules/card';
import './grid.css'

export const Grid = ({marketList}) => {
    console.log(marketList);

    return (
        <div className="grid">
            { marketList.map(item => {
                return <Card key={item.id} title={ item.title } id={item.id} />
            }) }
        </div>
    )
}
