import React, { useState } from 'react';
import { EditProduct } from '../../organisms/forms/editProduct';
import '@fortawesome/react-fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faMinusSquare } from '@fortawesome/free-solid-svg-icons';
import './product.css'

export const Product = ({ product, update, deleteProduct }) => {
    
    const [edit, setEdit] = useState(false)

    const color = { 
        background: (product.id % 2 === 0) ? 'rgba(0, 0, 0, 0.1)' : 'rgba(0, 0, 0, 0.2)'
    }
    const handleClickDelete = () => {
        deleteProduct(product.id)
    }

    const handleClickEdit = () => {
        setEdit(!edit)
    }

    if (edit) {
        return( 
            <EditProduct product={ product } update={update} setEdit={setEdit} /> 
        )
    } else {
        return (
            <div className="product" style={color}>
                <p>
                    <span>Producto:</span>
                    {product.product}
                </p>
                <p>
                    <span>Cantidad:</span>
                    {product.quantity}
                </p>
                <p>
                    <span>Precio:</span>
                    {product.price}
                </p>
                <p> 
                    <span>Precio total:</span>
                    { product.quantity * product.price }
                </p>
                <div className="content-buttons">
                    <div 
                        className="buttons edit" 
                        title="Editar" 
                        onClick={ handleClickEdit }
                    >
                        <FontAwesomeIcon icon={faEdit} />
                        <span>
                            Editar
                        </span>
                    </div>
                    <div 
                        className="delete buttons" 
                        title="Eliminar" 
                        name="update"
                        onClick={ handleClickDelete }
                    >
                        <FontAwesomeIcon icon={faMinusSquare} />
                        <span>
                            Eliminar
                        </span>
                    </div>
                </div>
            </div>
        ) 
    }
    
    
}
