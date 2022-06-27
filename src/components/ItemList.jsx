import React from 'react'
import Item from './Item'
import './itemList.css'

const ItemList = ({ products }) => {
    return (
        <>
            <h2 className="my-5 text-center main-title animate__animated animate__bounceInLeft">Listado de productos</h2>
            <div className="mobile-width row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4 mb-5 animate__animated animate__zoomInUp">
                {products?.map(product => <Item key={product.id} product={product} />)}
            </div>
        </>
    )
}

export default ItemList