import React, { useState } from 'react'
import './itemcount.css'

const ItemCount = ({ inicial, stock, onAdd }) => {
    const [qty, setQty] = useState(inicial)

    const restar = () => {
        qty > 1 && setQty(qty - 1)
    }

    const sumar = () => {
        qty < stock && setQty(qty + 1)
    }

    return (
        <>
            <div className="qty">
                <span className="minus" onClick={restar}>-</span>
                <input type="number" className="count" name="qty" value={qty} onChange={(event)=>this.inputChangedHandler(event)} />                
                <span className="plus" onClick={sumar}>+</span>
                <button className="btn btn-secondary mx-4" onClick={() => { onAdd(qty) }}>Agregar al carrito</button>
            </div>
        </>
    )
}

export default ItemCount