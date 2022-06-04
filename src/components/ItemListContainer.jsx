import React, { useState, useEffect } from 'react'
import ItemList from './ItemList'

export default function ItemListContainer() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  //Productos
  const listado = [
    { id: 1, name: 'Producto 1', price: '$100' },
    { id: 2, name: 'Producto 2', price: '$200' },
    { id: 3, name: 'Producto 3', price: '$300' },
    { id: 4, name: 'Producto 4', price: '$200' },
    { id: 5, name: 'Producto 5', price: '$100' },
    { id: 6, name: 'Producto 6', price: '$200' },
    { id: 7, name: 'Producto 7', price: '$300' },
    { id: 8, name: 'Producto 8', price: '$200' },
    { id: 9, name: 'Producto 9', price: '$100' },
    { id: 10, name: 'Producto 10', price: '$200' },
    { id: 11, name: 'Producto 11', price: '$300' },
    { id: 12, name: 'Producto 12', price: '$200' },
  ]

  const task = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(listado)
    }, 3000)
  })

  useEffect(() => {
    task
      .then((res) => {
        setProducts(res)
        setLoading(false)
      })
  }, [])
 
  return (
    <>
      <div className='container'>
        {loading ? 
        <h2>Loading...</h2> 
        :
        <ItemList products={products}/>
      }
      </div>
    </>
  )
}
