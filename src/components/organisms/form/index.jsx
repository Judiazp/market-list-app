import React from 'react'
import { useForm } from '../../../hooks/useForm'
import { Button } from '../../atoms/button'
import { Input } from '../../atoms/input/input'
import './form.css'

export const AddList = ({ addList }) => {

    const [createList, handleInputChange] = useForm({
        title: ''
    })

    const handleSubmitForm = (e) => {
        e.preventDefault()
        addList(createList)
    }

    return (
        <form onSubmit={ handleSubmitForm }>
            <Input 
                name="title" 
                placeholder="Lista del asado" 
                onChange={ handleInputChange } 
                required={true} 
            />
            <Button 
                type="submit" 
                text="Agregar lista" 
                color="#2196F3" 
                textColor="#FFF" 
            />
        </form>
    )
}
