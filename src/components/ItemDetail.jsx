import React from 'react'
import ItemCount from './ItemCount'
import './itemdetail.css'

const ItemDetail = ({ detail }) => {
    const onAdd = (contador) => {
        alert(`Agregado ${contador} producto(s)`)
    }
    return (
        <>
            {detail.map(item => (
                <>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-12 p-2 text-center'>
                            <img src={item.img} className='detail-img'/>
                        </div>
                        <div className='col-lg-6 col-md-6 col-12'>
                            <h2 className='detail-title'>{item.name}</h2>
                            <p className='detail-price'>$ {item.price}</p>
                            <p className='detail-details'>{item.details}</p>
                            <ItemCount inicial={1} stock={10} onAdd={onAdd}/>
                        </div>
                    </div>
                </>
            ))}
        </>
    )
}

export default ItemDetail