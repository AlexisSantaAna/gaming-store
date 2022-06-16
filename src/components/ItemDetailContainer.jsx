import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'

const ItemDetailContainer = () => {
    const [detail, setDetail] = useState([])
    const [loading, setLoading] = useState('Cargando...')
    const { id } = useParams()

    const item = [
        { id: 1, name: 'Pc Ryzen 5', details: "Rendimiento de última generación en la consola Xbox más pequeña de la historia. Experimenta la velocidad y el rendimiento de una consola totalmente digital de próxima generación a un precio accesible. En el corazón de la Serie S se encuentra la Arquitectura Xbox Velocity que combina un SSD personaliza do con un software integrado para un juego más rápido y optimizado con tiempos de carga significativamente reducidos.", price: 450, img: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_25495_Consola_Microsoft_XBOX_Series_S_512GB_Digital_f5fc94c4-grn.jpg" },
        { id: 2, name: 'Pc Intel I7', details: "Rendimiento de última generación en la consola Xbox más pequeña de la historia. Experimenta la velocidad y el rendimiento de una consola totalmente digital de próxima generación a un precio accesible. En el corazón de la Serie S se encuentra la Arquitectura Xbox Velocity que combina un SSD personaliza do con un software integrado para un juego más rápido y optimizado con tiempos de carga significativamente reducidos.", price: 450, img: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_25495_Consola_Microsoft_XBOX_Series_S_512GB_Digital_f5fc94c4-grn.jpg" },
        { id: 3, name: 'Pc Intel I5', details: "Rendimiento de última generación en la consola Xbox más pequeña de la historia. Experimenta la velocidad y el rendimiento de una consola totalmente digital de próxima generación a un precio accesible. En el corazón de la Serie S se encuentra la Arquitectura Xbox Velocity que combina un SSD personaliza do con un software integrado para un juego más rápido y optimizado con tiempos de carga significativamente reducidos.", price: 450, img: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_25495_Consola_Microsoft_XBOX_Series_S_512GB_Digital_f5fc94c4-grn.jpg" },
        { id: 4, name: 'Consola Playstation 5 1TB', details: "Rendimiento de última generación en la consola Xbox más pequeña de la historia. Experimenta la velocidad y el rendimiento de una consola totalmente digital de próxima generación a un precio accesible. En el corazón de la Serie S se encuentra la Arquitectura Xbox Velocity que combina un SSD personaliza do con un software integrado para un juego más rápido y optimizado con tiempos de carga significativamente reducidos.", price: 450, img: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_25495_Consola_Microsoft_XBOX_Series_S_512GB_Digital_f5fc94c4-grn.jpg" },
        { id: 5, name: 'Consola Playstation 5 2TB', details: "Rendimiento de última generación en la consola Xbox más pequeña de la historia. Experimenta la velocidad y el rendimiento de una consola totalmente digital de próxima generación a un precio accesible. En el corazón de la Serie S se encuentra la Arquitectura Xbox Velocity que combina un SSD personaliza do con un software integrado para un juego más rápido y optimizado con tiempos de carga significativamente reducidos.", price: 450, img: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_25495_Consola_Microsoft_XBOX_Series_S_512GB_Digital_f5fc94c4-grn.jpg" },
        { id: 6, name: 'Joystick PS5', details: "Rendimiento de última generación en la consola Xbox más pequeña de la historia. Experimenta la velocidad y el rendimiento de una consola totalmente digital de próxima generación a un precio accesible. En el corazón de la Serie S se encuentra la Arquitectura Xbox Velocity que combina un SSD personaliza do con un software integrado para un juego más rápido y optimizado con tiempos de carga significativamente reducidos.", price: 450, img: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_25495_Consola_Microsoft_XBOX_Series_S_512GB_Digital_f5fc94c4-grn.jpg" },
        { id: 7, name: 'Xbox One', details: "Rendimiento de última generación en la consola Xbox más pequeña de la historia. Experimenta la velocidad y el rendimiento de una consola totalmente digital de próxima generación a un precio accesible. En el corazón de la Serie S se encuentra la Arquitectura Xbox Velocity que combina un SSD personaliza do con un software integrado para un juego más rápido y optimizado con tiempos de carga significativamente reducidos.", price: 450, img: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_25495_Consola_Microsoft_XBOX_Series_S_512GB_Digital_f5fc94c4-grn.jpg" },
        { id: 8, name: 'Xbox Two', details: "Rendimiento de última generación en la consola Xbox más pequeña de la historia. Experimenta la velocidad y el rendimiento de una consola totalmente digital de próxima generación a un precio accesible. En el corazón de la Serie S se encuentra la Arquitectura Xbox Velocity que combina un SSD personaliza do con un software integrado para un juego más rápido y optimizado con tiempos de carga significativamente reducidos.", price: 450, img: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_25495_Consola_Microsoft_XBOX_Series_S_512GB_Digital_f5fc94c4-grn.jpg" },
        { id: 9, name: 'Xbox Three', details: "Rendimiento de última generación en la consola Xbox más pequeña de la historia. Experimenta la velocidad y el rendimiento de una consola totalmente digital de próxima generación a un precio accesible. En el corazón de la Serie S se encuentra la Arquitectura Xbox Velocity que combina un SSD personaliza do con un software integrado para un juego más rápido y optimizado con tiempos de carga significativamente reducidos.", price: 450, img: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_25495_Consola_Microsoft_XBOX_Series_S_512GB_Digital_f5fc94c4-grn.jpg" },
        { id: 10, name: 'Nintendo Switch', details: "Rendimiento de última generación en la consola Xbox más pequeña de la historia. Experimenta la velocidad y el rendimiento de una consola totalmente digital de próxima generación a un precio accesible. En el corazón de la Serie S se encuentra la Arquitectura Xbox Velocity que combina un SSD personaliza do con un software integrado para un juego más rápido y optimizado con tiempos de carga significativamente reducidos.", price: 450, img: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_25495_Consola_Microsoft_XBOX_Series_S_512GB_Digital_f5fc94c4-grn.jpg" },
        { id: 11, name: 'Nintendo Switch Premium', details: "Rendimiento de última generación en la consola Xbox más pequeña de la historia. Experimenta la velocidad y el rendimiento de una consola totalmente digital de próxima generación a un precio accesible. En el corazón de la Serie S se encuentra la Arquitectura Xbox Velocity que combina un SSD personaliza do con un software integrado para un juego más rápido y optimizado con tiempos de carga significativamente reducidos.", price: 450, img: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_25495_Consola_Microsoft_XBOX_Series_S_512GB_Digital_f5fc94c4-grn.jpg" },
        { id: 12, name: 'Nintendo Switch Plus XL', details: "Rendimiento de última generación en la consola Xbox más pequeña de la historia. Experimenta la velocidad y el rendimiento de una consola totalmente digital de próxima generación a un precio accesible. En el corazón de la Serie S se encuentra la Arquitectura Xbox Velocity que combina un SSD personaliza do con un software integrado para un juego más rápido y optimizado con tiempos de carga significativamente reducidos.", price: 450, img: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_25495_Consola_Microsoft_XBOX_Series_S_512GB_Digital_f5fc94c4-grn.jpg" }
    ]



    const task = new Promise((resolve, reject) => {
        // setTimeout(() => {
            if (id == 1) {
                resolve(item.filter(producto => producto.id === 1))
            } else if (id == 2) {
                resolve(item.filter(producto => producto.id === 2))
            } else if (id == 3) {
                resolve(item.filter(producto => producto.id === 3))
            } else if (id == 4) {
                resolve(item.filter(producto => producto.id === 4))
            } else if (id == 5) {
                resolve(item.filter(producto => producto.id === 5))
            } else if (id == 6) {
                resolve(item.filter(producto => producto.id === 6))
            } else if (id == 7) {
                resolve(item.filter(producto => producto.id === 7))
            } else if (id == 8) {
                resolve(item.filter(producto => producto.id === 8))
            } else if (id == 9) {
                resolve(item.filter(producto => producto.id === 9))
            } else if (id == 10) {
                resolve(item.filter(producto => producto.id === 10))
            } else if (id == 11) {
                resolve(item.filter(producto => producto.id === 11))
            } else if (id == 12) {
                resolve(item.filter(producto => producto.id === 12))
            }
        // }, 2000)
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
            {loading ? <h2>{loading}</h2> :
                <>                    
                    <ItemDetail detail={detail} />
                </>
            }
        </div>
    )
}

export default ItemDetailContainer
