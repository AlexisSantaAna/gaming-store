import React from 'react'
import { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import { Helmet } from 'react-helmet'
import Swal from 'sweetalert2'
import './cart.css'
import './itemList.css'
import 'atropos/css'
import CartCheckout from './CartCheckout'

const Cart = () => {
    const { cart, emptyCart, deleteItem } = useContext(CartContext)

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

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return (
        <>
            <Helmet>
                <title>Gaming Store - Carrito</title>
            </Helmet>

            {cart.length > 0 ?
                <section className='container cart-section'>
                    <div className='col-12 col-xl-8 py-4 p-md-4'>
                        <h2 className='text-center my-4 my-md-5 main-title animate__animated animate__bounceInLeft'>Carrito de compras</h2>
                        <div className='text-center d-flex justify-content-center align-items-center animate__animated animate__zoomInUp'>
                            <div className='row container cart-container justify-content-center align-items-center'>
                                <div className='col-2'></div>
                                <div className='col-5 text-center cart-text'>
                                    <h6>PRODUCTOS</h6>
                                </div>
                                <div className='col-1 text-center cart-text'>
                                    <h6>CANT</h6>
                                </div>
                                <div className='col-2 text-center cart-text'>
                                    <h6>PRECIO</h6>
                                </div>
                                <div className='col-2 text-center cart-text'>
                                    <h6>TOTAL</h6>
                                </div>
                            </div>
                        </div>

                        {cart.map((e, index) => (
                            <>
                                <div key={index} className='text-center d-flex justify-content-center align-items-center py-3 item-cart'>
                                    <div className='row container justify-content-center align-items-center cart-container animate__animated animate__zoomInUp'>
                                        <div className='col-7 d-flex'>
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
                                        <div className='col-1 cart-text'>
                                            <p className='text-center fw-bold'>{e.qty}</p>
                                        </div>
                                        <div className='col-2 cart-text'>
                                            <p className='text-center fw-bold'>${e.price}</p>
                                        </div>
                                        <div className='col-2 cart-text'>
                                            <p className='text-center fw-bold'>${e.qty * e.price}</p>
                                        </div>
                                    </div>

                                </div>
                            </>
                        ))}
                        <div className='text-center pt-2 pb-2 pb-md-5 d-flex justify-content-end align-items-center container'>
                            <button className='btn btn-secondary btn-sm mx-2 animate__animated animate__zoomInUp' onClick={() => {
                                emptyCart()
                                emptyCartAlert()
                            }}>Vaciar carrito</button>
                        </div>
                    </div>

                    {/* Form */}
                    <CartCheckout />

                </section>
                :
                <section className='container d-flex empty-cart-container'>
                    <div className='col-12 p-4 text-center'>
                        <h2 className='py-5 main-title animate__animated animate__bounceInLeft'>Carrito de compras</h2>
                        <p>NO HAY PRODUCTOS</p>
                        <Link to={'/'}><button className='btn btn-secondary btn-sm'>Volver a la tienda</button></Link>
                    </div>
                </section>
            }


        </>
    )
}

export default Cart