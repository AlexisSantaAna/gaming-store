import React from 'react'
import './item.css'
import { Link } from 'react-router-dom'
import Atropos from 'atropos/react';

const Item = ({ product }) => {
    return (
        <>
            <Atropos
                className='my-atropos'
                activeOffset={40}
                shadowScale={0}
            >
                <div className="col">

                    <div className="card h-100">
                        <Link to={"/item/" + product.id} className="text-center card-img d-flex justify-content-center"><img src={product.img} className="card-img-top shop-img" alt="product" data-atropos-offset="6" /></Link>
                        <div className="card-body text-center">
                            <h5 className="card-title mb-3" data-atropos-offset="0">{product.name}</h5>
                            <div>
                                <p className="card-price mb-1" data-atropos-offset="-6">${product.price}</p>
                            </div>
                        </div>
                    </div>

                </div>
            </Atropos>
        </>
    )
}

export default Item