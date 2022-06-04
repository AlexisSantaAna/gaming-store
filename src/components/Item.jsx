import React from 'react'
import './item.css'

const Item = ({ product }) => {
    return (
        <>
            <div className="col">
                <div className="card h-100">
                    <img src="http://placekitten.com/300/400" className="card-img-top shop-img" alt="product" />
                    <div className="card-body">
                        <h5 className="card-title mb-3">{product.name}</h5>
                        <p className="card-text mb-1"><b>Precio:</b> {product.price}</p>
                        <p className="card-text mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et itaque ad cumque voluptates ipsam maxime?</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Item