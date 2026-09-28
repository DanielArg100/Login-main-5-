import React from "react";
import Logo from "../../assets/img/Form/Gato.jpg";

import { useState, useEffect } from "react";

function Main() {
    const[User,SetUser]=useState('')
    const[Password,SetPassword]=useState('')
    const[Mensajes,SetMensajes]=useState('')
  return (
    <>
      <main className="contenido">
        <div className="contenedorFormulario">
          <img src={Logo} alt="" />
          <form action="" method="post" className="formLogin">
            <h1>Login</h1>
            <label htmlFor="User">User:</label>
            <input type="text" name="User" id="User" value={User} onChange={SetPassword((e)=>e.target.value)}/>
            <label htmlFor="Password">Password:</label>
            <input type="password" name="password" id="password" />
            <input type="submit" value="Ingresar" className="btnIngresar" />
          </form>
        </div>
      </main>
    </>
  );
}

export default Main;
