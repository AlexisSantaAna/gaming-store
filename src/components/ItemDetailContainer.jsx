import React, { useEffect, useState } from 'react'
import { getFirestore, doc, getDoc } from "firebase/firestore";
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import Loader from './Loader'

const ItemDetailContainer = () => {
    const [detail, setDetail] = useState([])
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    //Firebase
    useEffect(() => {
        const db = getFirestore()
        const productRef = doc(db, "productos", id); //Traigo 1 solo producto que coincida con el id
        const pedido = getDoc(productRef);
        pedido
            .then((producto) => {
                setDetail({ ...producto.data(), id: id });
            })
            .finally(() => setLoading(false));
    }, [id]);

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
