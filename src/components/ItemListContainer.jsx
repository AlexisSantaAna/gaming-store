import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'

export default function ItemListContainer() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const { categoryId } = useParams()

  //Productos
  const listado = [
    { id: 1, categoryId: "pc", name: 'Pc Ryzen 5', price: 450, img: `http://placekitten.com/300/40` },
    { id: 2, categoryId: "pc", name: 'Pc Intel I7', price: 450, img: `http://placekitten.com/300/40` },
    { id: 3, categoryId: "pc", name: 'Pc Intel I5', price: 450, img: `http://placekitten.com/300/40` },
    { id: 4, categoryId: "playstation", name: 'Consola Playstation 5 1TB', price: 450, img: `http://placekitten.com/300/40` },
    { id: 5, categoryId: "playstation", name: 'Consola Playstation 5 2TB', price: 450, img: `http://placekitten.com/300/40` },
    { id: 6, categoryId: "playstation", name: 'Joystick PS5', price: 450, img: `http://placekitten.com/300/40` },
    { id: 7, categoryId: "xbox", name: 'Xbox One', price: 450, img: `http://placekitten.com/300/40` },
    { id: 8, categoryId: "xbox", name: 'Xbox Two', price: 450, img: `http://placekitten.com/300/40` },
    { id: 9, categoryId: "xbox", name: 'Xbox Three', price: 450, img: `http://placekitten.com/300/40` },
    { id: 10, categoryId: "switch", name: 'Nintendo Switch', price: 450, img: `http://placekitten.com/300/4` },
    { id: 11, categoryId: "switch", name: 'Nintendo Switch Premium', price: 450, img: `http://placekitten.com/300/4` },
    { id: 12, categoryId: "switch", name: 'Nintendo Switch Plus XL', price: 450, img: `http://placekitten.com/300/4` },
  ] 

  const task = new Promise((resolve, reject) => {    
    setTimeout(() => {
      if (categoryId === "pc") {
        resolve(listado.filter(producto => producto.categoryId === "pc"))
      } else if (categoryId === "playstation") {
        resolve(listado.filter(producto => producto.categoryId === "playstation"))
      } else if (categoryId === "xbox") {
        resolve(listado.filter(producto => producto.categoryId === "xbox"))
      } else if (categoryId === "switch") {
        resolve(listado.filter(producto => producto.categoryId === "switch"))
      } else {
        resolve(listado)
      }
    }, 2000)
  })

  useEffect(() => {
    setLoading(true)
    task
      .then((res) => {
        setProducts(res)
        setLoading(false)
      })
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
