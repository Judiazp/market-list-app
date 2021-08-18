import React, { useState } from 'react';
import { Footer } from '../../molecules/footer';
import { Header } from '../../molecules/header';
import { AddList } from '../../organisms/form';
import { Grid } from '../../organisms/grid';
import './markets.css'

export const Markets = () => {

    const [marketList, setMarketList] = useState([])

    const addList = ({title}) => {

        const newList = {
            title: title,
            id: new Date().getMilliseconds()
        }
        setMarketList([
            newList,
            ...marketList
        ])
    }

    console.log(marketList);

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
