// import React, { useEffect, useState } from 'react'

// const PracticaPromise = () => {
//     const [products, setProducts] = useState([])

//     const listado = [
//         { id: 1, name: 'Producto 1', price: '$100' },
//         { id: 2, name: 'Producto 2', price: '$200' },
//         { id: 3, name: 'Producto 3', price: '$300' },
//     ]

//     const task = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(listado)
//         }, 3000)
//     })

//     useEffect(() => {
//         task
//             .then((res) => setProducts(res))
//     }, [])

//     return (
//         <>
//             <div className='productos text-center my-4'>
//                 {/* <div>{loading}</div> */}

//                 {products && products.map(item => (
//                     <div key={item.id}>
//                         <p>Nombre: {item.name}</p>
//                         <p>Precio: {item.price}</p>
//                     </div>
//                 ))}

//             </div>
//         </>
//     )
// }

// export default PracticaPromise








// import React, { useEffect, useState } from 'react'

// export default function PracticaPromise() {
//     const [loading, setLoading] = useState('Cargando...')
//     const [resultado, setResultado] = useState(undefined)

//     useEffect(() => {
//         const pagara = new Promise((res, rej) => {
//             setTimeout(() => {
//                 res([{ id: 'kf939f', monto: 200, agencia: 'Petete' }, { id: '2gfhmmn4', monto: 160, agencia: 'Churrete' }, { id: '55fpolld', monto: 230, agencia: 'Firulete' }])
//                 // rej('NO PAGO!!!!!')
//             }, 2000)
//         })

//         pagara
//             .then((result) => {
//                 setResultado(result)
//                 setLoading(false)
//             })
//             .catch((error) => {
//                 setLoading(false)
//                 setResultado(error)
//             })


//     }, [])

//     return (
//         <>
//             <div className='productos text-center my-4'>
//                 <div>{loading}</div>

//                 {resultado && resultado.map(item => (
//                     <div key={item.id}>
//                         <p>Monto: {item.monto}</p>
//                         <p>Agencia: {item.agencia}</p>
//                     </div>
//                 ))}

//             </div>
//         </>
//     )
// }
