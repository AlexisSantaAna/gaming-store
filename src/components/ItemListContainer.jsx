import React, { useState, useEffect } from 'react'
import { getFirestore, getDocs, collection, query, where } from 'firebase/firestore'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import Loader from './Loader'
import { Helmet } from 'react-helmet'

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
      const filtro = query(coleccionProductos, where("category", "==", categoryId));
      pedido = getDocs(filtro); //getDocs devuelve una promesa
    } else {
      pedido = getDocs(coleccionProductos);
    }
    pedido
      .then((resultado) => {
        setProducts(resultado.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      })
      .finally(() => setLoading(false));
  }, [categoryId]);

  const title = categoryId ? categoryId : 'Productos'

  return (
    <>
      <main className='container main-container d-flex flex-column align-items-center justify-content-center'>
        <Helmet>
          <title>{`Gaming Store - ${title.charAt(0).toUpperCase() + title.slice(1)}`}</title>
        </Helmet>
        {loading ? <Loader loading={loading} /> : <ItemList products={products} />}
      </main>
    </>
  )
}
