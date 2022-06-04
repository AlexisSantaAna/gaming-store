import React from 'react'
import Item from './Item'

const ItemList = ({ products }) => {
    return (
        <>
            <div className="row row-cols-2 row-cols-md-4 row-cols-lg-5 row-cols-xl-6 g-4">
                {products?.map(product => <Item key={product.id} product={product} />)}
            </div>
        </>
    )
}

export default ItemList