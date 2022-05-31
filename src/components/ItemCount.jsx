import React, { useState } from 'react'
import './itemcount.css'

const ItemCount = ( {inicial, stock} ) => {
    const [contador, setContador] = useState(inicial)

    const handleClickDown = () => {
        contador > 1 && setContador(contador - 1)
    }

    const handleClick = () => {
        contador < stock && setContador(contador + 1)
    }

    return (
        <>
            <div className="qty mt-5 text-center">
                <h1>¡Contador!</h1>
                <span className="minus" onClick={handleClickDown}>-</span>
                <input type="number" className="count" name="qty" value={contador} />
                <span className="plus" onClick={handleClick}>+</span>                
            </div>
        </>
    )
}

export default ItemCount