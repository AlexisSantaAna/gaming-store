import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import { Helmet } from 'react-helmet'
import Swal from 'sweetalert2'
import './cart.css'
import './itemList.css'
import 'atropos/css'

const Cart = () => {
    const { cart, emptyCart, getItemPrice, deleteItem, getItemQty } = useContext(CartContext)

    const purchaseAlert = () => {
        Swal.fire({
            position: "center",
            icon: "success",
            iconColor: "#00A300",
            title: `Ha comprado ${getItemQty()} productos`,
            showConfirmButton: false,
            timer: 2500,
        });
    }

    const emptyCartAlert = () => {
        Swal.fire({
            toast: true,
            position: "bottom-end",
            icon: "success",
            iconColor: "#374151",
            title: "Carrito vacío",
            showConfirmButton: false,
            timer: 2500,
            showClass: {
                popup: 'animate__animated animate__fadeInUp'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutDown'
            }
        });
    }


    return (
        <>
            <Helmet>
                <title>Gaming Store - Carrito</title>
            </Helmet>
            <section className='container'>
                <h2 className='text-center py-5 main-title animate__animated animate__bounceInLeft'>Carrito de compras</h2>
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
                            <div className='row container justify-content-center align-items-center cart-container'>
                                <div className='col-6 d-flex'>
                                    <div className='row d-flex'>
                                        <div className='col-4 cart-img-container'>
                                            <img src={e.img} className='cart-img'></img>
                                        </div>
                                        <div className='col-8 d-flex flex-column align-items-center justify-content-center'>
                                            <p className='text-center cart-title'>{e.name}</p>
                                            <p className='delete-btn' onClick={() => deleteItem(e.id)}><i class="fa fa-trash fa-sm"></i> Eliminar producto</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-2'>
                                    <p className='text-center fw-bold'>{e.qty}</p>
                                </div>
                                <div className='col-2'>
                                    <p className='text-center fw-bold'>${e.price}</p>
                                </div>
                                <div className='col-2'>
                                    <p className='text-center fw-bold'>${e.qty * e.price}</p>
                                </div>
                            </div>

                        </div>
                    </>
                ))}
            </section>

            {cart.length > 0 ?
                <div className='text-center pt-2 pb-5 d-flex justify-content-end align-items-center container'>
                    <button className='btn btn-secondary btn-sm mx-2' onClick={() => {
                        emptyCart()
                        emptyCartAlert()
                    }}>Vaciar carrito</button>
                    <button className='btn btn-secondary btn-sm mx-2' onClick={() => {
                        purchaseAlert()
                        emptyCart()
                    }}>Finalizar compra</button>
                    <div className='px-2'>
                        <div className='text-center'>PRECIO TOTAL</div>                        
                        <div><b>${getItemPrice()}</b></div>
                    </div>

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