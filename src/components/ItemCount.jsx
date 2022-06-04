import React, { useState } from 'react'
import './itemcount.css'

const ItemCount = ( {inicial, stock, onAdd} ) => {
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
            <div className="qty mt-5 text-center">
                <h1>¡Contador!</h1>
                <span className="minus" onClick={restar}>-</span>
                <input type="number" className="count" name="qty" value={contador} />
                <span className="plus" onClick={sumar}>+</span>                       
            </div>
            <button className="btn btn-secondary mx-1" onClick={() => reset()}>Reset</button>
            <button className="btn btn-secondary my-3 mx-1" onClick={() => {onAdd(contador); reset()}}>Agregar al carrito</button>
        </>
    )
}

export default ItemCount