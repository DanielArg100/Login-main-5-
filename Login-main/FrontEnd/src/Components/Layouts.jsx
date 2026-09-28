import React from 'react'
import Header from './Home/Header'
import './Layouts.css'
import Footer from './Home/Footer'
import Main from './Home/Main'

function Layouts() {
  return (
    <div className="pagina">
        <Header />
        <Main />
        <Footer />
    </div>
  )
}

export default Layouts