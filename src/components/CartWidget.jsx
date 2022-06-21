import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

export default function CartWidget() {
  const { getItemQty } = useContext(CartContext)

  return (
    <Link className="nav-links total-cart-container text-center" to="/cart">
      <span className=" text-center"><i className="fas fa-shopping-cart fa-lg"></i><sup id="total-cart" className="h6"> {getItemQty() > 0 ? getItemQty() : 0}</sup></span>
    </Link>
  )
}
