import React from 'react'
import { Input } from '../../../atoms/input/input';
import { Button } from '../../../atoms/button';
import '../form.css'
import { useForm } from '../../../../hooks/useForm';

export const AddProductList = ({ addProduct }) => {

    const [productForm, handleInputChange] = useForm({
        product: '',
        quantity: '',
        price: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        addProduct(productForm)
    } 

    return (
        <form 
            className="form-add-product"
            onSubmit={ handleSubmit }
        >
            <Input 
                name="product"
                placeholder="Producto"
                onChange={ handleInputChange }
            />
            <Input 
                name="quantity"
                placeholder="Cantidad"
                type="number"
                onChange={ handleInputChange }
            />
            <Input 
                name="price"
                placeholder="Precio"
                type="number"
                onChange={ handleInputChange }
            />
            <Button text="Añadir" type="submit" />
        </form>
    )
}