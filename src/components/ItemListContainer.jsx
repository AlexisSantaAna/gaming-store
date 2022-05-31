import React, { useState } from 'react'
import ItemCount from './ItemCount'

export default function ItemListContainer() {
  const [estaMontado, setEstaMontado] = useState(true)

  const desmontar = () => {
    setEstaMontado(false)
  }

  const montar = () => {
    setEstaMontado(true)
  }

  return (
    <>
      {/* Texto provisorio */}
      <p>Aquí ira la lista de productos!!!! Hola!!!</p>

      {/* contador y montar/desmontar */}
      {estaMontado && <ItemCount inicial={1} stock={10} />}

      {/* botones para montar y desmontar */}
      <div className='text-center'>
        <button className='btn btn-secondary mt-4 mx-1' onClick={montar}>Montar</button>
        <button className='btn btn-secondary mt-4 mx-1' onClick={desmontar}>Desmontar</button>
      </div>
    </>
  )
}
