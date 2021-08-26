import React from 'react';
import { Input } from '../../../atoms/input/input';
import { Button } from '../../../atoms/button';
import { useForm } from '../../../../hooks/useForm';

export const EditProduct = ({update, product, setEdit}) => {
    const [editForm, handleInputChange] = useForm({
        product: product.product,
        quantity: product.quantity,
        price: product.price
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        update(editForm, product.id)
        setEdit(false)
    }

    return (
        <form 
            className="form-edit-product"
            onSubmit={ handleSubmit }
        >
            <Input 
                name="product"
                placeholder="Producto"
                value={ editForm.product }
                onChange={ handleInputChange }
                className="input"
            />
            <Input 
                name="quantity"
                placeholder="Cantidad"
                type="number"
                value={ editForm.quantity }
                className="input"
                onChange={ handleInputChange }
            />
            <Input 
                name="price"
                placeholder="Precio"
                type="number"
                value={ editForm.price }
                onChange={ handleInputChange }
                className="input"
            />
            <div className="content-button-edit">
                <Button text="Confirmar" type="submit" />
                <Button text="Cancelar" color="brown" click={ () => setEdit(false) } />
            </div>
        </form>
    )
}
