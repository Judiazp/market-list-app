import React from 'react'
import { Button } from '../../atoms/button'
import { Input } from '../../atoms/input/input'
import './form.css'

export const AddList = () => {
    return (
        <form>
            <Input placeholder="Lista para asado de fin de semana" />
            <Button type="submit" message="Agregar lista" color="#2196F3" textColor="#FFF" />
        </form>
    )
}
