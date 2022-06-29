import React, { useContext } from 'react'
import { useState } from 'react'
import { CartContext } from '../context/CartContext'
import Swal from 'sweetalert2'
import { addDoc, collection, getFirestore } from 'firebase/firestore'

const CartCheckout = () => {
    //Datos tomados de CartContext
    const { cart, getItemPrice, getItemQty, emptyCart } = useContext(CartContext)
    //Estados y variables utilizadas para crear el formulario del cliente y el ticket
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    //ID Ticket de compra
    const [idCompra, setIdCompra] = useState('')

    //Cargamos los datos de la venta en Firestore
    const db = getFirestore()
    const orderCollection = collection(db, 'orders')

    const handleClick = (e) => {
        e.preventDefault()
        //Objeto que subo a la base de datos
        const order = {
            buyer: { name, lastName, email, phone },
            items: cart,
            total: getItemPrice()
        }

        addDoc(orderCollection, order).then(({ id }) => {
            setIdCompra(id)
        })

        //Info que muestro en el sitio al cliente
        Swal.fire({
            position: "center",
            icon: "success",
            iconColor: "#00A300",
            title: `Gracias por su compra!\nHa comprado ${getItemQty()} productos\n`,
            showConfirmButton: true
        });
    }

    const handleSubmit = () => {
        setName('')
        setLastName('')
        setEmail('')
        setPhone('')
    }

    return (
        <div className='col-4 container p-4'>
            <h2 className='text-center py-5 main-title animate__animated animate__bounceInLeft'>Resumen del pedido</h2>
            <div className='d-flex justify-content-between'>
                <p><b>{getItemQty()} PRODUCTOS</b></p>
                <p><b>${getItemPrice()}</b></p>
            </div>
            <form>
                <div className="mb-2">
                    <label htmlFor="name" className="form-label">NOMBRE</label>
                    <input type="name" className="form-control" onChange={e => setName(e.target.value)} id="name" value={name} required placeholder='Ingresa tu nombre' />
                </div>
                <div className="mb-2">
                    <label htmlFor="lastname" className="form-label">APELLIDO</label>
                    <input type="lastname" className="form-control" onChange={e => setLastName(e.target.value)} id="lastname" value={lastName} required placeholder='Ingresa tu apellido' />
                </div>
                <div className="mb-2">
                    <label htmlFor="email" className="form-label">EMAIL</label>
                    <input type="email" className="form-control" onChange={e => setEmail(e.target.value)} id="email" value={email} required placeholder='Ingresa tu email' />
                </div>
                <div className="mb-2">
                    <label htmlFor="phone" className="form-label">TELEFONO</label>
                    <input type="phone" className="form-control" onChange={e => setPhone(e.target.value)} id="phone" value={phone} required placeholder='Ingresa tu teléfono' />
                </div>
                <div className='d-flex justify-content-between'>
                    <p><b>PRECIO TOTAL</b></p>
                    <p><b>${getItemPrice()}</b></p>
                </div>
                <button className='btn btn-secondary container mb-4' type='submit' onClick={(e) => {
                    handleClick(e)
                    emptyCart()
                    handleSubmit()
                }}>Proceder con el pago</button>
            </form>
        </div>
    )
}

export default CartCheckout