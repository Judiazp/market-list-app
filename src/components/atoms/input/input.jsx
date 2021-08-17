import React from 'react'
import './input.css'

export const Input = ({ placeholder, type='text' }) => {
    return (
        <input type={type} placeholder={ placeholder } />
    )
}
