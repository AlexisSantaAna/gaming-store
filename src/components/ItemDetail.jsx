import React from 'react'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
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
            {detail.map(item => (
                <>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-12 p-2 text-center'>
                            <img src={item.img + item.id} className='detail-img' />
                        </div>
                        <div className='col-lg-6 col-md-6 col-12'>
                            <h2 className='detail-title'>{item.name}</h2>
                            <p className='detail-price'>$ {item.price}</p>
                            <p className='detail-details'>{item.details}</p>
                            {mostrarCounter ? <ItemCount inicial={1} stock={5} onAdd={onAdd} />
                                :
                                <>
                                    <Link className="btn btn-secondary" to='/productos'>Seguir Comprando</Link>
                                    <Link className="btn btn-secondary mx-3" to='/cart'>Ir al carrito</Link>
                                </>
                            }
                        </div>
                    </div>
                </>
            ))}
        </>
    )
}

export default ItemDetail