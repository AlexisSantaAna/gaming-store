import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import './cart.css'

export default function CartWidget({ collapseNav }) {
  const { getItemQty } = useContext(CartContext)

  return (
    <>
      <div className="dropdown">
        <Link onClick={collapseNav} className="nav-links text-center" to="/cart">
          <span className="text-center"><i className="fas fa-shopping-cart fa-lg ms-1"></i><sup id="total-cart" className="h6"> {getItemQty() > 0 ? getItemQty() : 0}</sup></span>
        </Link>
      </div>
    </>
  )
}
