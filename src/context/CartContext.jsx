import React, { createContext, useState } from 'react'
export const CartContext = createContext()

const MyProvider = ({ children }) => {

    const [cart, setCart] = useState()

    return (
        <CartContext.Provider>
            {children}
        </CartContext.Provider>
    )
}

export default MyProvider