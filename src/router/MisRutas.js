import React from 'react';
import { Routes, Route, BrowserRouter, NavLink, Navigate } from "react-router-dom";
import { Inicio } from '../components/Inicio'
import { Contacto } from '../components/Contacto';
import { Curriculum } from '../components/Curriculum';
import { Portafolio } from '../components/Portafolio';
import { Servicios } from '../components/Servicios';
import { HeaderNav } from '../components/layout/HeaderNav';
import { Footer } from '../components/layout/Footer';
import {Proyecto} from '../components/Proyecto';

export const MisRutas = () => {
    return (
        <BrowserRouter>
            {/*Header y Navegacion */}
            <HeaderNav />

            {/*Contenido central */}
            <section className="content">

                <Routes>
                    <Route path="/" element={<Navigate to="/inicio" />} />
                    <Route path="/inicio" element={<Inicio />} />
                    <Route path="/contacto" element={<Contacto />} />
                    <Route path="/curriculum" element={<Curriculum />} />
                    <Route path="/portafolio" element={<Portafolio />} />
                    <Route path="/servicios" element={<Servicios />} />
                    <Route path="/proyecto/:id" element={<Proyecto/>} />
                    <Route path="*" element={
                        <div className='page'>
                            <h1 className='heading'>Error 404</h1>
                        </div>
                    } />
                </Routes>

            </section>


            {/*Footer */}
            <Footer />
        </BrowserRouter>
    )
}
