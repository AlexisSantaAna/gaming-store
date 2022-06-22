import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import './cart.css'

const Cart = () => {
    const { cart, emptyCart, getItemPrice, deleteItem } = useContext(CartContext)


    return (
        <>
            <section className='container'>
                <h2 className='text-center py-5'>Carrito de compras</h2>
                {cart.length > 0 &&
                    <div className='text-center d-flex justify-content-center align-items-center'>
                        <div className='row container justify-content-center align-items-center'>
                            <div className='col-6 text-center'>
                                <p>PRODUCTOS</p>
                            </div>
                            <div className='col-2 text-center'>
                                <p>CANTIDAD</p>
                            </div>
                            <div className='col-2 text-center'>
                                <p>PRECIO</p>
                            </div>
                            <div className='col-2 text-center'>
                                <p>TOTAL</p>
                            </div>
                        </div>
                    </div>
                }
                {cart.map((e, index) => (
                    <>
                        <div key={index} className='text-center d-flex justify-content-center align-items-center py-2'>
                            <div className='row container justify-content-center align-items-center'>
                                <div className='col-6 d-flex'>
                                    <div className='row d-flex'>
                                        <div className='col-4 cart-img-container'>
                                            <img src={e.img} className='cart-img'></img>
                                        </div>
                                        <div className='col-8'>
                                            <p className='text-center'>{e.name}</p>
                                            <p className='text-center'>{e.category}</p>
                                            <button className='btn btn-secondary btn-sm' onClick={() => deleteItem(e.id)}>Eliminar producto</button>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-2'>
                                    <p className='text-center'>{e.qty}</p>
                                </div>
                                <div className='col-2'>
                                    <p className='text-center'>${e.price}</p>
                                </div>
                                <div className='col-2'>
                                    <p className='text-center'>${e.qty * e.price}</p>
                                </div>
                            </div>

                        </div>
                    </>
                ))}
            </section>

            {cart.length > 0 ?
                <div className='text-center py-5'>
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