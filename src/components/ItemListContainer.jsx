import React, { useState, useEffect } from 'react'
import { getFirestore, getDocs, collection, query, where } from 'firebase/firestore'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import Loader from './Loader'

export default function ItemListContainer() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const { categoryId } = useParams()

  //Firebase
  useEffect(() => {
    const db = getFirestore()
    const coleccionProductos = collection(db, "productos");
    let pedido;

    if (categoryId) {
      const filtro1 = where("category", "==", categoryId);
      const consulta = query(coleccionProductos, filtro1);
      pedido = getDocs(consulta);
    } else {
      pedido = getDocs(coleccionProductos);
    }
    pedido
      .then((resultado) => {
        setProducts(resultado.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      })
      .finally(() => setLoading(false));
  }, [categoryId]);

  // const getData = () => {
  //   fetch('../../api.json')
  //     .then(res => res.json())
  //     .then(data => {
  //       if (categoryId) {
  //         setProducts(data.filter(products => products.category == categoryId))
  //       } else {
  //         setProducts(data)
  //       }
  //     })
  // }

  // useEffect(() => {
  //   setLoading(true)
  //   const fetch = new Promise((res, rej) => {
  //     res(getData())
  //   })
  //   fetch
  //     .finally(() => setLoading(false));
  // }, [categoryId])

  return (
    <>
      <main className='container main-container'>
        {loading ? <Loader loading={loading} /> : <ItemList products={products} />}
      </main>
    </>
  )
}
