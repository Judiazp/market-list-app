import React, { useEffect, useState } from 'react';
import { Footer } from '../../molecules/footer';
import { Header } from '../../molecules/header';
import { AddList } from '../../organisms/forms/createMarketList';
import { Grid } from '../../organisms/grid';
import './markets.css'

export const Markets = () => {

    const initialMarketListState = JSON.parse(localStorage.getItem('market-list')) || []

    const [marketList, setMarketList] = useState(initialMarketListState)
    // const [products, setProducts] = useState([])

    useEffect(() => {
        localStorage.setItem(`market-list`, JSON.stringify(marketList))
    }, [marketList])

    const addList = (object) => {
        const newList = {
            title: object.title,
            list: [],
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
                    <Grid marketList={ marketList } setMarketList={ setMarketList } />
                </div>
            </div>
            <Footer />
        </div>
    )
}
