import React from 'react'

function Footer() {
  return (
    <footer className="pie">
      <div className="pie-contenedor">
        <section className="pie-marca">
          <p className="pie-nombre">Nexo</p>
          <p className="pie-descripcion">
            Soluciones digitales para trabajar simple y rápido. Conocé nuestros productos,
            novedades y formas de contacto en un mismo lugar.
          </p>
          <ul className="pie-redes">
            <li>
              <a className="pie-red" href="https://www.instagram.com" target="_blank" rel="noreferrer">
                Instagram
              </a>
            </li>
            <li>
              <a className="pie-red" href="https://www.facebook.com" target="_blank" rel="noreferrer">
                Facebook
              </a>
            </li>
            <li>
              <a className="pie-red" href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </li>
          </ul>
        </section>

        <section className="pie-bloque">
          <h2 className="pie-titulo">Enlaces utiles</h2>
          <ul className="pie-lista">
            <li><a href="">Nosotros</a></li>
            <li><a href="">Productos</a></li>
            <li><a href="">Planes y precios</a></li>
            <li><a href="">Blog</a></li>
          </ul>
        </section>

        <section className="pie-bloque">
          <h2 className="pie-titulo">Contacto</h2>
          <ul className="pie-lista pie-contacto">
            <li><a href="mailto:hola@nexo.com">hola@nexo.com</a></li>
            <li><a href="tel:+541155550000">+54 11 5555 0000</a></li>
            <li><span>Av. Corrientes 1234, Buenos Aires</span></li>
            <li><span>Lunes a viernes, 9 a 18 hs</span></li>
          </ul>
        </section>
      </div>

      <div className="pie-legal">
        <p className="pie-copyright">© 2026 Nexo. Todos los derechos reservados.</p>
        <p className="pie-nota">Disenado y desarrollado con dedicacion.</p>
      </div>
    </footer>
  )
}

export default Footer
