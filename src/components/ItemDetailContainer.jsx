import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    const [detail, setDetail] = useState([])
    const [loading, setLoading] = useState('Cargando...')

    const item = [
        { id: 1, name: "Consola Microsoft XBOX Series S 512GB Digital", details: "Rendimiento de última generación en la consola Xbox más pequeña de la historia. Experimenta la velocidad y el rendimiento de una consola totalmente digital de próxima generación a un precio accesible. En el corazón de la Serie S se encuentra la Arquitectura Xbox Velocity que combina un SSD personaliza do con un software integrado para un juego más rápido y optimizado con tiempos de carga significativamente reducidos.", price: 450, img: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_25495_Consola_Microsoft_XBOX_Series_S_512GB_Digital_f5fc94c4-grn.jpg" }
    ]

    const task = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(item)
        }, 3000)
    })

    useEffect(() => {
        task
            .then(res => {
                setDetail(res)
                setLoading(false)
            })
    }, [])

    return (
        <div className='container my-5'>
            {loading ? <h2>{loading}</h2> : <ItemDetail detail={detail} />}
        </div>
    )
}

export default ItemDetailContainer
