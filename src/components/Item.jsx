import React from 'react'
import './item.css'
import { Link } from 'react-router-dom'

const Item = ({ product }) => {
    return (
        <>
            <div className="col">
                <div className="card h-100">
                    <Link to={"/item/" + product.id} className="text-center card-img d-flex justify-content-center"><img src={product.img} className="card-img-top shop-img" alt="product" /></Link>
                    <div className="card-body text-center">
                        <h5 className="card-title mb-3">{product.name}</h5>
                        <div className='d-block'>
                            <p className="card-price mb-1">${product.price}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Item