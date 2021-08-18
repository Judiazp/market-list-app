import React, { useState } from 'react';
import { Footer } from '../../molecules/footer';
import { Header } from '../../molecules/header';
import { AddList } from '../../organisms/forms/createMarketList';
import { Grid } from '../../organisms/grid';
import './markets.css'

export const Markets = () => {

    const [marketList, setMarketList] = useState([])

    const addList = (object) => {
        const newList = {
            title: object.title,
            id: new Date().getTime()
        }
        setMarketList([
            newList,
            ...marketList
        ])
    }

    return (
        <div className="content-market-list-app">
            <Header />
            <div className="content-form-market-list">
                <AddList addList={ addList } />
                <div className="content-grid-market-list">
                    <Grid marketList={ marketList } />
                </div>
            </div>
            <Footer />
        </div>
    )
}
