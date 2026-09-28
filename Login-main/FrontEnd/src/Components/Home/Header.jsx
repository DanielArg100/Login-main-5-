import React from 'react'
import Logo from '../../assets/img/Logo.jpg'
function Header() {
  return (
    <>
        <header className="encabezado">
            <img src={Logo} alt="Logo" />
            <nav className="menu">
                <a href="">Nosotros</a>
                <a href="">Productos</a>
                <a href="">Contactos</a>
                <a href="">Login</a>
            </nav>
        </header>
    </>
  )
}

export default Header