import React from 'react'

const TestEventos = () => {
    // const handleClick = (e, x) => {
    //     alert(`Hiciste click en ${x}`)
    //     console.log(e)
    // }

    // return (
    //     <>
    //         <div className='container'>
    //             <h1 className='text-center py-5' onClick={(e) => handleClick(e, 1)} style={{ border: "2px solid red", background: "lightgrey" }}>TestEventos</h1>
    //             <h1 className='text-center py-5' onClick={(e) => handleClick(e, 2)} style={{ border: "2px solid red", background: "lightgrey" }}>TestEventos</h1>
    //         </div>
    //     </>
    // )

    //Solucion con preventDefault()
    // const handleClickDown = (e) => {
    //     if (
    //         e.key === 'a' ||
    //         e.key === 'e' ||
    //         e.key === 'i' ||
    //         e.key === 'o' ||
    //         e.key === 'u'
    //     ) {
    //         e.preventDefault()
    //     }
    // }

    const numeros = "1234567890"

    const handleClickDown = (e) => {
        if (numeros.includes(e.key)) {
            e.preventDefault()
        }
    }


    return (
        <>
            <div className='container d-flex justify-content-center flex-column align-items-center'>
                <label htmlFor='input' className='h1 py-5'>Ingrese algo</label>
                <input className='w-50' type="text" name="input" onKeyDown={(e) => { handleClickDown(e) }} />
            </div>
        </>
    )


}

export default TestEventos