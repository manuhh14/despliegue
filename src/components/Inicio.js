import React from 'react'
import { Link } from 'react-router-dom'
import { ListadoTrabajos } from './ListadoTrabajos'

export const Inicio = () => {
  return (
    <div className='home'>

      <h1>Hola, soy <strong>Manuel Hernandez Herrera</strong>y soy Desarrollador Web
        y ofresco mis servicios de <strong>programación </strong> y desarrollo en todo 
        de proyectos Web.
      </h1>

      <h2 className='title'>
        Te ayudo a crear tu sitio o aplicación web, para tener más 
        visibilidad y relevancia en internet. <Link to="/contacto"> contacta conmigo</Link>
      </h2>

      <section className="last-works">
        <h2 className="heading">Algunos de mis proyectos</h2>
        <p>Estos son algunos de mis trabajos de desarrollo web.</p>


        <ListadoTrabajos limite="2"/>
      </section>
    </div>
  )
}
