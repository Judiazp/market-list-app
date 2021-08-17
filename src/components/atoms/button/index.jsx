import React from 'react'
import './button.css'

export const Button = ({message, color="blue", type, textColor}) => {
    return (
        <button type={type} style={{ background: `${color}`, color: `${textColor}` }} className="btn">
            { message }
        </button>
    )
}
