import React from 'react'
import { Link } from 'react-router-dom'
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
                            <ul className='widget-ul'>
                                <li className='widget-list'>
                                    <Link to="/">Home</Link>
                                </li>
                                <li className='widget-list'>
                                    <Link to="/">La empresa</Link>
                                </li>
                                <li className='widget-list'>
                                    <Link to="/">Sucursales</Link>
                                </li>
                            </ul>
                        </div>
                        <div className='col-12 col-sm-4 col-edit'>
                            <h3 className='widget-title'>Productos</h3>
                            <ul className='widget-ul'>
                                <li className='widget-list'>
                                    <Link to="/categoria/pc">Pc</Link>
                                </li>
                                <li className='widget-list'>
                                    <Link to="/categoria/playstation">Ps5</Link>
                                </li>
                                <li className='widget-list'>
                                    <Link to="/categoria/xbox">Xbox</Link>
                                </li>
                                <li className='widget-list'>
                                    <Link to="/categoria/switch">Switch</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='text-center py-1'>
                        <p className='text-footer'>© 2022 Gaming Store • Desarrollado por <a href="https://www.linkedin.com/in/alexis-santa-ana/">Alexis Santa Ana</a></p>
                    </div>

                </div>
            </footer>
        </>
    )
}

export default Footer