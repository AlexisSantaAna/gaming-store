import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Cart = () => {
    const { cart } = useContext(CartContext)

    return (
        <>
            <h2 className='text-center py-5'>Cart</h2>
            {cart.map((e, index) => (
                <>
                    <div key={index} className='text-center'>
                        <img src={e.img + e.id} style={{width: 100}}></img>
                        <p className='text-center'>{e.name}</p>
                        <p className='text-center'>{e.category}</p>
                        <p className='text-center'>{e.price}</p>
                        <p className='text-center'>{e.details}</p>
                    </div>
                </>
            ))}
        </>
    )
}

export default Cart