import React from 'react'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import { Helmet } from 'react-helmet'
import ItemCount from './ItemCount'
import './itemdetail.css'

const ItemDetail = ({ detail }) => {
    const [mostrarCounter, setMostrarCounter] = useState(true)
    const { isInCart, addItem } = useContext(CartContext)

    const onAdd = (qty) => {
        setMostrarCounter(false)
        //contador envia el numero de cosas compradas
        isInCart(detail.id)
        addItem(detail, qty)
    }
    return (
        <>
            <>
                <Helmet>
                    <title>{`Gaming Store - ${detail.name.charAt(0).toUpperCase() + detail.name.slice(1)}`}</title>
                </Helmet>
                <div className='row'>
                    <div className='col-lg-6 col-md-6 col-12 p-2 d-flex justify-content-center align-items-center'>
                        <img src={detail.img} className='detail-img' />
                    </div>
                    <div className='col-lg-6 col-md-6 col-12 d-flex flex-column justify-content-center'>
                        <h2 className='detail-title'>{detail.name}</h2>
                        <p className='detail-price'>$ {detail.price}</p>
                        <p className='detail-details' dangerouslySetInnerHTML={{ __html: detail.details }}></p>
                        {mostrarCounter ? <ItemCount inicial={1} stock={5} onAdd={onAdd} product={detail.name} />
                            :
                            <>
                                <div>
                                    <Link className="btn btn-secondary" to='/productos'>Seguir Comprando</Link>
                                    <Link className="btn btn-secondary mx-3" to='/cart'>Ir al carrito</Link>
                                </div>
                            </>
                        }
                    </div>
                </div>
            </>
        </>
    )
}

export default ItemDetail