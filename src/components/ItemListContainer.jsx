import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'

export default function ItemListContainer() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const { categoryId } = useParams()

  const getData = () => {
    fetch('../../api.json')
      .then(res => res.json())
      .then(data => {
        if (categoryId) {
          setProducts(data.filter(products => products.category == categoryId))
        } else {
          setProducts(data)
        }
      })
  }

  useEffect(() => {
    const fetch = new Promise((res, rej) => {
      res(getData())
    })
    fetch
      .then(setLoading(true))
      .finally(() => setLoading(false))
  }, [categoryId])

  return (
    <>
      <main className='container main-container'>
        {loading ?
          <h2 className='text-center my-5'>Cargando...</h2>
          :
          <ItemList products={products} />
        }
      </main>
    </>
  )
}
