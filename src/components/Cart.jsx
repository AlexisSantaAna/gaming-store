import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Cart = () => {
    const { cart, emptyCart, getItemPrice, deleteItem } = useContext(CartContext)
    

    return (
        <>
            <h2 className='text-center py-5'>Cart</h2>
            {cart.map((e, index) => (
                <>
                    <div key={index} className='text-center'>
                        <img src={e.img + e.id} style={{ width: 100 }}></img>
                        <p className='text-center'>Producto: {e.name}</p>
                        <p className='text-center'>Categoria: {e.category}</p>                        
                        <p className='text-center'>Detalles: {e.details}</p>
                        <p className='text-center'>Cantidad: {e.qty}</p>
                        <p className='text-center'>Precio: ${e.price}</p> 
                        <p className='text-center'>Total ${e.qty * e.price}</p>
                        <button className='btn btn-secondary' onClick={() => deleteItem(e.id)}>Eliminar producto</button>
                    </div>
                </>
            ))}

            {cart.length > 0 ?
                <div className='text-center'>
                    <button className='btn btn-secondary' onClick={emptyCart}>Vaciar carrito</button>
                    <p className='text-center'>PRECIO TOTAL ${getItemPrice()}</p>
                </div> :
                <div className='text-center'>
                    <p>NO HAY PRODUCTOS</p>
                </div>
            }

        </>
    )
}

export default Cart