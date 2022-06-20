import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'

const ItemDetailContainer = () => {
    const [detail, setDetail] = useState([])
    const [loading, setLoading] = useState('Cargando...')
    const { id } = useParams()

    const getData = () => {
        fetch('../../api.json')
            .then(res => res.json())
            .then(data => {
                if (id) {
                    setDetail(data.filter(products => products.id == id))
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
      }, [id])

    return (
        <div className='container my-5'>
            {loading ? <h2>{loading}</h2> :
                <>                    
                    <ItemDetail detail={detail} />
                </>
            }
        </div>
    )
}

export default ItemDetailContainer
