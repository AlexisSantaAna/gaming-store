import React from 'react'
import { Link } from 'react-router-dom'

export default function CartWidget() {
  return (
    <Link className="nav-links total-cart-container text-center" to="/cart">
      <span className=" text-center"><i className="fas fa-shopping-cart fa-lg"></i><sup id="total-cart" className="h6"> 0</sup></span>
    </Link>
  )
}
