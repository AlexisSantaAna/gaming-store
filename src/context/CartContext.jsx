import React, { createContext, useState } from 'react'
export const CartContext = createContext()

const MyProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    //Metodo Some - ItemDetail - Si el producto a agregar ya está en el carrito o no (true/false)
    const isInCart = (id) => {
        return cart.some(x => x.id === id)
    }

    //ItemDetail - Se encarga de agregar el producto seleccionado al cart, sin pisar a los agregados anteriormente
    const addItem = (item, qty) => {
        const newItem = {
            ...item,
            qty      
        }

        console.log(newItem)

        if (isInCart(newItem.id)) {
            const findProduct = cart.find(x => x.id == newItem.id)
            const productIndex = cart.indexOf(findProduct)
            const auxArray = [...cart]
            auxArray[productIndex].qty += qty
            setCart(auxArray)

        } else {
            setCart([...cart, newItem])            
        }
        console.log(cart)
    }

    //Vaciar el carrito con botón
    const emptyCart = () => {
        setCart([])
    }

    //Filter - Cart - Retorna array sin el prod. seleciconado (id)
    const deleteItem = (id) => {
        return cart.filter(x => x.id !== id)
    }

    //Reduce - Productos en total (cartWidget)
    const getItemQty = () => {
        return cart.reduce((acc, x) => acc += x.qty, 0)
    }

    //Reduce - Cart - Precio total del carrito
    const getItemPrice = () => {
        return cart.reduce((acc, x) => acc += x.qty * x.price, 0)
    }

    return (
        <CartContext.Provider value={{ cart, isInCart, addItem, emptyCart, deleteItem, getItemQty, getItemPrice }}>
            {children}
        </CartContext.Provider>
    )
}

export default MyProvider