import React from 'react'
import ItemCount from './ItemCount'



const Home = () => {
    const onAdd = (contador) => {
        alert(`Agregado ${contador} producto(s)`)
    }

    return (
        <>
            <div className='contador text-center'>
                <h1 className='my-5'>Home</h1>
                <ItemCount inicial={1} stock={10} onAdd={onAdd} />
            </div>
        </>
    )
}

export default Home