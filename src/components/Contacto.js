import React from 'react'

export const Contacto = () => {
  return (
    <div className='page'>

      <h1 className='heading'>Contacto</h1>

      <form className="contact" action="manuhh14@gmail.com">
        <input type="text" placeholder='Nombre'/>
        <input type="text" placeholder='Apellidos'/>
        <input type="text" placeholder='Email'/>
        <textarea placeholder='Motivos de contacto'/>
        <input type="submit" value="Envia"/>
      </form>
    </div>
  )
}
