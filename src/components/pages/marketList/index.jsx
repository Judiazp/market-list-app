import React from 'react';
import { Footer } from '../../molecules/footer';
import { Header } from '../../molecules/header';
import { AddList } from '../../organisms/form';
import './marketList.css'

export const MarketList = () => {
    return (
        <div className="content-market-list-app">
            <Header />
            <div className="content-form-market-list">
                <AddList />
            </div>
            <Footer />
        </div>
    )
}
