import React from 'react'
import { Input } from '../../../atoms/input/input';
import { Button } from '../../../atoms/button';
import '../form.css'
import { useForm } from '../../../../hooks/useForm';

export const AddProductList = ({ addProduct }) => {

    const [productForm, handleInputChange, clearInputValue] = useForm({
        product: '',
        quantity: '',
        price: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        addProduct(productForm)
        clearInputValue()
    }

    return (
        <form 
            className="form-add-product"
            onSubmit={ handleSubmit }
        >
            <Input 
                name="product"
                placeholder="Producto"
                value={ productForm.product }
                onChange={ handleInputChange }
            />
            <Input 
                name="quantity"
                placeholder="Cantidad"
                type="number"
                value={ productForm.quantity }

                onChange={ handleInputChange }
            />
            <Input 
                name="price"
                placeholder="Precio"
                type="number"
                value={ productForm.price }
                onChange={ handleInputChange }
            />
            <Button text="Añadir" type="submit" />
        </form>
    )
}