import React, { useContext } from 'react'
import { useState } from 'react'
import { CartContext } from '../context/CartContext'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'
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

    const handleClick = () => {
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

    return (
        <div className='col-4 container p-4'>
            <h2 className='text-center py-5 main-title animate__animated animate__bounceInLeft'>Resumen del pedido</h2>
            <div className='d-flex justify-content-between'>
                <p><b>{getItemQty()} PRODUCTOS</b></p>
                <p><b>${getItemPrice()}</b></p>
            </div>
            <form>
                <div class="mb-2">
                    <label for="name" class="form-label">NOMBRE</label>
                    <input type="name" class="form-control" onChange={(e) => setName(e.target.value)} id="name" placeholder='Ingresa tu nombre' />
                </div>
                <div class="mb-2">
                    <label for="lastname" class="form-label">APELLIDO</label>
                    <input type="lastname" class="form-control" onChange={(e) => setLastName(e.target.value)} id="lastname" placeholder='Ingresa tu apellido' />
                </div>
                <div class="mb-2">
                    <label for="email" class="form-label">EMAIL</label>
                    <input type="email" class="form-control" onChange={(e) => setEmail(e.target.value)} id="email" placeholder='Ingresa tu email' />
                </div>
                <div class="mb-2">
                    <label for="phone" class="form-label">TELEFONO</label>
                    <input type="phone" class="form-control" onChange={(e) => setPhone(e.target.value)} id="phone" placeholder='Ingresa tu teléfono' />
                </div>
                <div className='d-flex justify-content-between'>
                    <p><b>PRECIO TOTAL</b></p>
                    <p><b>${getItemPrice()}</b></p>
                </div>
                <Link to={'/cart'}><button className='btn btn-secondary container mb-4' onClick={() => {
                    handleClick()
                    emptyCart()
                }}>Proceder con el pago</button></Link>
            </form>
        </div>
    )
}

export default CartCheckout