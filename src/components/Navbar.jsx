import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
        <Link to="/" className="logo"><h1>TecnoShop</h1> </Link>
        <ul className="menu">
            <li><Link className="menu-link" to="/">Inicio</Link></li>
            <li><Link className="menu-link" to="/nosotros">Nosotros</Link></li>
            <li><Link className="menu-link" to="/productos">Productos</Link></li>
            <li><Link className="menu-link" to="/productos/Consolas">Consolas</Link></li>
            <li><Link className="menu-link" to="/productos/Accesorios">Accesorios</Link></li>
            <li><Link className="menu-link" to="/productos/Juegos">Juegos</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar