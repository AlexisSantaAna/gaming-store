import React, { useEffect, useState } from 'react'
import { getFirestore, collection, doc, getDoc } from "firebase/firestore";
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Loader from './Loader'

const ItemDetailContainer = () => {
    const [detail, setDetail] = useState([])
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    //Firebase
    useEffect(() => {
        const db = getFirestore()
        const coleccionProductos = collection(db, "productos");
        const docRef = doc(coleccionProductos, id);
        const pedido = getDoc(docRef);
        pedido
            .then((resultado) => {
                const producto = resultado.data();
                setDetail({ ...producto, id });
            })
            .finally(() => setLoading(false));
    }, [id]);

    // const getData = () => {
    //     fetch('../../api.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             if (id) {
    //                 setDetail(data.find(products => products.id == id))
    //             }
    //         })
    // }

    // useEffect(() => {
    //     setLoading(true)
    //     const fetch = new Promise((res, rej) => {
    //         res(getData())
    //     })
    //     fetch
    //         .then(setLoading(true))
    //         .finally(() => setLoading(false))
    // }, [id])

    return (
        <div className='container my-5'>
            {loading ? <Loader loading={loading} /> :
                <>
                    <ItemDetail detail={detail} />
                </>
            }
        </div>
    )
}

export default ItemDetailContainer
