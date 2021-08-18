import React from 'react'
import './button.css'

export const Button = ({text, color="#2196F3", type, textColor="#fff", click}) => {
    return (
        <button 
            type={type} 
            style={{ background: `${color}`, color: `${textColor}` }} 
            className="btn"
            onClick={ click }
        >
            { text }
        </button>
    )
}
