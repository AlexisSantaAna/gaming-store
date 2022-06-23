import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import './cart.css'

const Cart = () => {
    const { cart, emptyCart, getItemPrice, deleteItem, getItemQty } = useContext(CartContext)


    return (
        <>
            <section className='container'>
                <h2 className='text-center py-5'>Carrito de compras</h2>
                {cart.length > 0 &&
                    <div className='text-center d-flex justify-content-center align-items-center'>
                        <div className='row container justify-content-center align-items-center'>
                            <div className='col-2'></div>
                            <div className='col-4 text-center'>
                                <p className='h6'>PRODUCTOS</p>
                            </div>
                            <div className='col-2 text-center'>
                                <p className='h6'>CANTIDAD</p>
                            </div>
                            <div className='col-2 text-center'>
                                <p className='h6'>PRECIO</p>
                            </div>
                            <div className='col-2 text-center'>
                                <p className='h6'>TOTAL</p>
                            </div>
                        </div>
                    </div>
                }
                {cart.map((e, index) => (
                    <>
                        <div key={index} className='text-center d-flex justify-content-center align-items-center py-3 item-cart'>
                            <div className='row container justify-content-center align-items-center'>
                                <div className='col-6 d-flex'>
                                    <div className='row d-flex'>
                                        <div className='col-4 cart-img-container'>
                                            <img src={e.img} className='cart-img'></img>
                                        </div>
                                        <div className='col-8'>
                                            <p className='text-center cart-title'>{e.name}</p>
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
                    <button className='btn btn-secondary btn-sm mx-2' onClick={emptyCart}>Vaciar carrito</button>
                    <button className='btn btn-secondary btn-sm mx-2' onClick={() => {
                        alert(`¡Ha comprado ${getItemQty()} productos!`)
                        emptyCart()
                    }}>Finalizar compra</button>
                    <p className='text-center'>PRECIO TOTAL ${getItemPrice()}</p>
                </div> :
                <div className='text-center'>
                    <p>NO HAY PRODUCTOS</p>
                    <Link to={'/'}><button className='btn btn-secondary btn-sm'>Volver a la tienda</button></Link>
                </div>

            }

        </>
    )
}

export default Cart