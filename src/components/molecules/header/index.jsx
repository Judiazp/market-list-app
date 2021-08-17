import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './header.css'

export const Header = () => {
    return (
        <header className="header">
            <div className="content-logo">
                <h1 className="icon-logo">
                    <FontAwesomeIcon icon={ faShoppingCart } />
                </h1> 
                <h2>Market</h2>
            </div>
        </header>
    )
}
