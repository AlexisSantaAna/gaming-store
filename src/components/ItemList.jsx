import React from 'react'
import Item from './Item'

const ItemList = ({ products }) => {
    return (
        <>
            <h2 className="my-5 text-center">Productos</h2>
            <div className="row row-cols-2 row-cols-md-4 row-cols-lg-5 row-cols-xl-6 g-4 mb-5">
                {products?.map(product => <Item key={product.id} product={product} />)}
            </div>
        </>
    )
}

export default ItemList