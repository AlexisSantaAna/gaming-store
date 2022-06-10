import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <>
            <footer className='footer'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-sm-4 col-edit'>
                            <h3 className='widget-title'>Contactanos</h3>
                            <p>WhatsApp Rosario <span><i className='fab fa-whatsapp'></i> 341 6 666666</span></p>
                            <p>WhatsApp Santa Fe <span><i className='fab fa-whatsapp'></i> 341 6 666666</span></p>
                            <p>ventas@gamingstore.com.ar</p>
                        </div>
                        <div className='col-12 col-sm-4 col-edit'>
                            <h3 className='widget-title'>Gaming Store</h3>
                        </div>
                        <div className='col-12 col-sm-4 col-edit'>
                            <h3 className='widget-title'>Productos</h3>
                        </div>
                    </div>
                    <div className='text-center py-1'>
                        <p className='text-footer'>© 2022 Gaming Store • Desarrollado por <a href="https://www.linkedin.com/in/alexis-santa-ana-9176b622b/">Alexis Santa Ana</a></p>
                    </div>

                </div>
            </footer>
        </>
    )
}

export default Footer