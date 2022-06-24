import React, { useState, useEffect } from 'react'
import './itemcount.css'
import Swal from 'sweetalert2'
import 'animate.css';

const ItemCount = ({ inicial, stock, onAdd, product }) => {
    const [qty, setQty] = useState(inicial)

    const restar = () => {
        qty > 1 && setQty(qty - 1)
    }

    const sumar = () => {
        qty < stock && setQty(qty + 1)
    }

    const notification = () => {
        Swal.fire({
            toast: true,
            position: "bottom-end",
            icon: "success",
            iconColor: "#374151",
            title: `Se agregó \n<span style="color: #00A300">${product}</span> al carrito`,
            showConfirmButton: false,
            timer: 4000,
            showClass: {
                popup: 'animate__animated animate__fadeInUp'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutDown'
            }
        });
    }

    return (
        <>
            <div className="qty">
                <span className="minus" onClick={restar}>-</span>
                <input type="number" className="count" name="qty" value={qty} onChange={(event) => this.inputChangedHandler(event)} />
                <span className="plus" onClick={sumar}>+</span>
                <button className="btn btn-secondary mx-4" onClick={() => { onAdd(qty); notification() }}>Agregar al carrito</button>
            </div>
        </>
    )
}

export default ItemCount