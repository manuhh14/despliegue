import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { trabajos } from '../data/trabajos'

export const Proyecto = () => {

    const [proyecto, setProyecto] = useState({});
    const params = useParams();

    useEffect(() => {
        let proyecto = trabajos.filter(trabajos => trabajos.id === params.id)

        setProyecto(proyecto[0]);
        //console.log(proyecto)

    }, []);

    return (
        <div className='page page-work'>

            <h1 className='heading'>{proyecto.nombre}</h1>

            <div className='mask'>
              <img src={"/images/"+ proyecto.id+".png"}/>
            </div>

            <p>{proyecto.tecnologias}</p>
            <hr/>

            <p>{proyecto.descripcion}</p>
            <a href={"https://"+proyecto.url} target="_blank">Ir al proyecto</a>


        </div>
    )

}


