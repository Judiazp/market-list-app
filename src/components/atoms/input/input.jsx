import React from 'react'
import './input.css'

export const Input = ({ 
        placeholder, 
        type='text', 
        name, 
        onChange, 
        required, 
        value,
        className
    }) => {
    return (
        <input 
            type={type} 
            placeholder={ placeholder } 
            onChange={ onChange }
            name={ name } 
            required={ required }
            value={ value }
            className={ className }
        />
    )
}
