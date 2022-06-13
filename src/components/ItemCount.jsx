import React, { useState } from 'react'
import './itemcount.css'

const ItemCount = ({ inicial, stock, onAdd }) => {
    const [contador, setContador] = useState(inicial)

    const restar = () => {
        contador > 1 && setContador(contador - 1)
    }

    const sumar = () => {
        contador < stock && setContador(contador + 1)
    }

    const reset = () => {
        setContador(inicial)
    }

    return (
        <>
            <div className="qty">
                <span className="minus" onClick={restar}>-</span>
                <input type="number" className="count" name="qty" value={contador} />
                <span className="plus" onClick={sumar}>+</span>
                <button className="btn btn-secondary mx-3" onClick={() => reset()}>Reset</button>
                <button className="btn btn-secondary" onClick={() => { onAdd(contador); reset() }}>Agregar al carrito</button>
            </div>
        </>
    )
}

export default ItemCount